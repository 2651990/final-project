import { faCartShopping, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { styles } from "./TopTitleBarCss";
import { useQuery } from "@tanstack/react-query";
import { IonBackButton, IonButtons, useIonViewWillEnter } from "@ionic/react";
import { caretBack } from "ionicons/icons";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { useHistory } from "react-router";

export default function TopTitleBar() {
  const [notiNum, setnotiNum] = useState(0);

  const {
    data: cartInfo,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_SERVER}/cart/userAllCartItems/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Cannot Get Cart Items!");
      }

      return await res.json();
    },
    enabled: false,
  });

  useIonViewWillEnter(() => {
    // console.log("TopTitleBar")
    refetch()
  })
  // console.log("cartInfo:", cartInfo)

  const history = useHistory() 

  return (
    <div className="title">
      <div style={styles.campExpress}>Camp Express</div>
      <div className="iconStyle">
        <div style={styles.cartStyle} onClick ={() => history.push('/myCart')}>
          <FontAwesomeIcon icon={faCartShopping} size="xl" />
        </div>
        <span
          style={
            cartInfo?.length == 0
              ? styles.NotShowCartNum
              : styles.showCartNum
          }
        >
          {cartInfo?.length}
        </span>
        {/* <div className="notiStyle">
          <FontAwesomeIcon icon={faBell} size="xl" />
        </div>
        <span style={notiNum == 0 
          ? styles.notShowNotiNum
           : styles.showNotiNum}>
          {notiNum}
        </span> */}
      </div>
    </div>
  );
}
