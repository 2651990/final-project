import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  useIonViewWillEnter,
} from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { useHistory } from "react-router";

export default function UserOrder() {

  const { data: orderInfo, isLoading, error, refetch } = useQuery({
    queryKey: ["profile/findOrder"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_SERVER}/profile/orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        return data; // Return the data to be used by React Query
      } else {
        console.log("Failed to fetch");
        throw new Error("Error"); // Throw an error to be handled by React Query
      }
    },

    enabled: false,
  });

  console.log("orderInfo:", orderInfo)

  const goToOrderDetailsPage = (orderId: number) => {
    // console.log("goToOrderDetailsPage:",orderId)
    history.push(`/getOrderItemsDetails/${orderId}`)
  }

  useIonViewWillEnter(() => {
    refetch();
  });

  const history = useHistory()



  if (isLoading) {
    return <div style={{ marginLeft: 20, fontSize: 25 }}>Loading...</div>;
  }

  if (error || orderInfo.length == 0) {
    return <div style={{ marginLeft: 20, fontSize: 20 }}>No order yet</div>;
  }

  if (orderInfo && orderInfo.length > 0) {

    return orderInfo.map((item: any, index: number) => (

      <IonCard key={index} onClick={()=>goToOrderDetailsPage(item.id)}>

        <IonCardHeader>Successful Order: </IonCardHeader>
        <IonCardContent>

          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: "bold", marginLeft: 5 }}>
              Mobile Number:
            </div>
            <div style={{ marginLeft: 10 }}>{item.mobile}</div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: "bold", marginLeft: 5 }}>
              Delivery Date:
            </div>
            <div style={{ marginLeft: 10 }}>{item.deliver_date}</div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: "bold", marginLeft: 5 }}>
              Delivery Time:
            </div>
            <div style={{ marginLeft: 10 }}>{item.deliver_time}</div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: "bold", marginLeft: 5 }}>Payment:</div>
            <div style={{ marginLeft: 10 }}>HK$ {item.payment}</div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: "bold", marginLeft: 5 }}>
              Payment Date:
            </div>
            <div style={{ marginLeft: 10 }}>{item.payment_date}</div>
          </div>
        </IonCardContent>
      </IonCard>
    ));
  }

  return orderInfo;
}
