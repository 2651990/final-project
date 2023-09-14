import {
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/react";
import Payment from "./Payment";
import { useHistory } from "react-router";
import SelectedItemInCart from "../../components/cart/ItemsInCart";
import "./MyCart.css";
import TopTitleBar from "../../components/TopTitleBar";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

interface DeliveryInfoType {
  mobile: number,
  site: string,
  deliver_date: string,
  deliver_time: string,
}

interface OrderItem {
  order_id: number;
  single_item_id: number;
  quantity: number;
  price: number;
}

function displayCurrentDateTime() {
  // Get the current date and time
  const currentDate = new Date();
  console.log(currentDate)

  // Extract the date components
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  // Extract the time components
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  // const formattedDateTime = `${year}-${month}-${day}`;
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  // const currentDate2 = new Date(formattedDateTime);
  return formattedDateTime
}

export default function MyCart() {

  const [tel, setTel] = useState<number>(NaN);
  const [site, setSite] = useState<string>("");
  const [dateTime, setDateTime] = useState<string>("");

  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== -1;
  };

  const history = useHistory();

  // 2. fetch
  const deliveryInfoMutation = useMutation({
    mutationFn: async (deliveryInfo: DeliveryInfoType) => {
      const res = await fetch(
        `${import.meta.env.VITE_API_SERVER}/cart/deliveryInfo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(deliveryInfo),
        }
      );
      // 3. based on response, alert? redirect other page?

      if (!res.ok) {
        throw new Error("Please check Delivery Details")
      }
      return await res.json();
    },

    onSuccess: (data: any) => {
      console.log("data:", data);
      history.push("/payment");
    },

    onError: (data: string) => {
      alert(data);
    }
  });

  const sumit = () => {
    // console.log(dateTime)
    const date = dateTime.slice(0, 10);
    const time = dateTime.slice(11, 16);
    const campSite = site.slice(0, 2);

    // 1. create a form object
    const deliveryInfo: DeliveryInfoType = {
      mobile: tel,
      site: campSite,
      deliver_date: date,
      deliver_time: time,
    };

    // console.log("deliveryInfo: ", deliveryInfo);

    // 2. fetch
    deliveryInfoMutation.mutate(deliveryInfo)
  };

  return (
    <IonPage>
      <IonHeader>
        <TopTitleBar />
      </IonHeader>

      <IonContent>
        <div className="deliveryDetailsText">Camping Materials</div>
        <SelectedItemInCart />

        <div className="deliveryDetailsText">Delivery Details</div>

        <div className="calendar">
          <IonDatetime
            // value={dateTime}
            onIonChange={(e) => setDateTime(String(e.target.value))}
            isDateEnabled={isWeekday}
            locale="en"

          >
            {" "}
          </IonDatetime>
        </div>

        <IonList>
          <IonItem>
            <IonSelect
              placeholder="Select a Camp Site"
              value={site}
              onIonChange={(e) => setSite(e.target.value)}
            >
              <div slot="label">
                Camp Site <IonText color="danger">(Required)</IonText>
              </div>
              <IonSelectOption value="1 Art Farm">1 Art Farm</IonSelectOption>
              <IonSelectOption value="2 Bee Bee Farm">
                2 BeeBee Farm
              </IonSelectOption>
              <IonSelectOption value="3 BULA Adventure Base">
                3 BULA Adventure Base
              </IonSelectOption>
              <IonSelectOption value="4 Easy Organic Farm">
                4 Easy Organic Farm
              </IonSelectOption>
              <IonSelectOption value="5 Grassroom">5 Grassroom</IonSelectOption>
              <IonSelectOption value="6 Urban Quit">
                6 Urban Quit
              </IonSelectOption>
              <IonSelectOption value="7 Natural Garden">
                7 Natural Garden
              </IonSelectOption>
              <IonSelectOption value="8 Po Leung Kuk Jockey Club Tai Tong Holiday Camp">
                8 Po Leung Kuk Jockey Club Tai Tong Holiday Camp
              </IonSelectOption>
              <IonSelectOption value="9 Tung Wah Group of Hospitals Ma Tso Lung Campsite">
                9 Tung Wah Group of Hospitals Ma Tso Lung Campsite
              </IonSelectOption>
              <IonSelectOption value="10 Tree Top Cottage">
                10 Tree Top Cottage
              </IonSelectOption>
              <IonSelectOption value="11 Joy in Wild">
                11 Joy in Wild
              </IonSelectOption>
              <IonSelectOption value="12 WE CAMP">12 WE CAMP</IonSelectOption>
              <IonSelectOption value="13 Butterfly Valley">
                13 Butterfly Valley
              </IonSelectOption>
              <IonSelectOption value="14 Gulf Camping">
                14 Gulf Camping
              </IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        <IonList>
          <IonItem>
            <div className="contactNum">
              <IonText color="danger">(Required)</IonText>
              <IonInput
                label="Contact Number: "
                value={tel}
                maxlength={8}
                type="number"
                placeholder="98765432"
                onIonInput={(e) => {
                  if (e.target.value) {
                    setTel(parseInt(e.target.value.toString()));
                  }
                }}
              ></IonInput>
            </div>
          </IonItem>
        </IonList>

        <IonButton
          size="small"
          color="success"
          className="chectoutBtn"
          onClick={sumit}
        >
          Sumit
          <Payment />
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
