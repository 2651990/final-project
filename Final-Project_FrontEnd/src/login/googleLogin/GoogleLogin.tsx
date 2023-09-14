import { GoogleLogin } from "@leecheuk/react-google-login";
import GoogleButton from "react-google-button";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { userAction } from "../../redux/userSlice";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import './GoogleLogin.css'

export default function GoogleLoginBtn() {
  const clientId: string = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";
  const history = useHistory();
  const dispatch = useDispatch();
  const responseGoogle = (data: any) => {
    const accessToken: string = gapi.auth.getToken().access_token;
    googleMutation.mutate(accessToken);
  };

  const googleMutation = useMutation({
    mutationFn: async (accessToken: string) => {
      const res = await fetch(
        `${import.meta.env.VITE_API_SERVER}/user/googleLogin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessToken,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Google login error");
      }
      return await res.json();
    },
    onSuccess: (data: any) => {
      dispatch(
        userAction.googleLogin({
          name: data.googleProfile.given_name,
          email: data.googleProfile.email,
          picture: data.googleProfile.picture,
          token: data.token,
        })
      );
      history.push("/browse");
      // console.log(data.googleProfile.given_name)
    },
  });


  useEffect(() => {
    const start = async () => {
      gapi.client.init({
        clientId: clientId,
      });
    };
    gapi.load("client:auth2", start);
  }, [clientId]);

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      render={(renderProps) => (
        <div >
          <GoogleButton
            className="googleButtonStyle"
            type="light"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Sign in with Google
          </GoogleButton>
        </div>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
