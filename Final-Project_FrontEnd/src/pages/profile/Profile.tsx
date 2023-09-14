import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonImg,
  IonPage
} from "@ionic/react";
import { useMutation } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TopTitleBar from "../../components/TopTitleBar";
import NavBar from "../../components/browse/browse";
import "../../components/browse/browse.css";
import UserOrder from "../../components/profile/userOrder";
import UserProfile from "../../components/profile/userProfile";
import { appAction } from "../../redux/appSlice";
import { useAppDispatch } from "../../redux/store";
import { userAction } from "../../redux/userSlice";
import "./Profile.css";

const Profile: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [image, setImage] = useState<File | undefined>();
  const [img1, setImg1] = useState<string>(
    "https://img.freepik.com/premium-vector/camping-vintage-graphic-illustration-vector-art-tshirt-design_24519-2509.jpg?w=740"
  );

  const goToPage = (path: string) => {
    history.push(path);
  };

  const onItemClick = (item: string) => {
    switch (item) {
      case 'Guidelines':
        goToPage('/guidelines');
        break;

      case 'Items':
        goToPage('/leasingItems');
        break;
      case 'Packages':
        goToPage('/leasingPackages');
        break;
      case 'Home':
        goToPage('/browse');
        break;
      default:
        break;
    }
  };

  const onChangeImage = (event: any) => {
    let f = event.target.files![0];
    setImage(f);
  };

  const uploadMutation = useMutation({
    mutationFn: async () => {
      if (!image) throw new Error("no images can be selected");
      const form = new FormData();
      form.append("file", image);
      const res = await fetch(
        `${import.meta.env.VITE_API_SERVER}/profile/images`,
        {
          method: "POST",
          body: form,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Fail upload Image");
      }
      const data = await res.json();
      return data;
    },
    onSuccess: async (data: any) => {
      const objectUrl = data.objectUrl;
      setImg1(objectUrl);
      console.log({ status: "success", data });
    },
    onError: (e) => {
      console.log("error: ", e);
    },
  });

  const uploadImage = () => {
    uploadMutation.mutate();
  };

  const handleLogOut = () => {
    goToPage("/login");
    dispatch(appAction.updateIsShowTab(false));
    dispatch(userAction.logout());
   
  };



  return (
    <IonPage>
      <IonHeader>
        <TopTitleBar />
      </IonHeader>

      <NavBar onItemClick={onItemClick} />

      <IonContent>
        <p></p>
        <div className="profilePicContainer">
          <div>
            <IonImg className="photo" src={img1} />
          </div>
          <UserProfile />
        </div>
        <div className="logOut">
          {/* <div>Your Information</div> */}
          <IonButton onClick={handleLogOut} color='success'>Log Out</IonButton>
        </div>
        <p></p>

        <IonCard>
          <IonCardHeader>Edit Your Icon</IonCardHeader>
          <IonCardContent>
            <input type="file" onChange={onChangeImage} />
            <IonButton
              className="profilePic"
              size="small"
              color="success"
              onClick={uploadImage}
            >
              Upload Profile Pic
            </IonButton>
          </IonCardContent>
        </IonCard>
        <div>
          <UserOrder />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
