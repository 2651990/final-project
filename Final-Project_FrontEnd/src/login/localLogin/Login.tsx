import {
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { eye, eyeOff } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { userAction } from "../../redux/userSlice";
import FacebookLogin from "../faceBookLogin/FacebookLogin";
import GoogleLoginBtn from "../googleLogin/GoogleLogin";
import LoginStyle from "./Login.module.css";
import { appAction } from "../../redux/appSlice";
import logo from '../.././ProjectPhotos/logo.jpeg'

const Login: React.FC = () => {
  const queryClient = useQueryClient();
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const history = useHistory();
  const dispatch = useAppDispatch();
  const loginMutation = useMutation({
    mutationFn: async (form: { username: string; password: string }) => {
      const { username, password } = form;
      const res = await fetch(`${import.meta.env.VITE_API_SERVER}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        alert("Wrong Username or Password");
        return;
      }
      const data = res.json();
      return data;
    },
    onSuccess: async (data: { access_token: string; userId: number }) => {
      await queryClient.invalidateQueries({ queryKey: ["cartItems"] });

      dispatch(appAction.updateIsShowTab(true));

      dispatch(
        userAction.login({
          username: username,
          token: data.access_token,
        })
      );
      history.push("/browse");
    },
  });
  useIonViewWillEnter(() => {
    dispatch(appAction.updateIsShowTab(false));
  });
  const login = () => {
    loginMutation.mutate({ username, password });
  };

  const goToPage = (path: string) => {
    history.push(path);
  };

  const registerBtn = () => {
    goToPage("/register");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <IonPage>
      <IonContent>
        <div className={LoginStyle.loginContainer}>
          <IonCardHeader>
            <IonCardTitle className={LoginStyle.loginText}>
              <div className={LoginStyle.loginTextMargin}><img src={logo} />Login</div>
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
              <IonInput
                label="Username"
                value={username}
                onInput={(e: any) => {
                  setUserName(e.target.value);
                }}
                labelPlacement="floating"
                placeholder="Enter text"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                label="Password"
                value={password}
                onInput={(e: any) => setPassword(e.target.value)}
                labelPlacement="floating"
                placeholder="Enter text"
              ></IonInput>
              <IonButton
                fill="clear"
                slot="end"
                onClick={togglePasswordVisibility}
              >
                <IonIcon
                  icon={showPassword ? eyeOff : eye} // Toggle between eye and eye-off icons
                ></IonIcon>
              </IonButton>
            </IonItem>

            <div className={LoginStyle.buttonContainer}>
              <IonButton color="success" onClick={login}>
                Submit
              </IonButton>

              {/* <IonButton
                color="success"
                // onClick={() => {
                //   setUserName("Chrysan");
                //   setPassword("123456");
                // }}
              >
                Change to Admin
              </IonButton> */}

              <IonButton color="success" onClick={registerBtn}>
                Register
              </IonButton>

            </div>
          </IonCardContent>
          <GoogleLoginBtn />
          <FacebookLogin />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
