import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import TopTitleBar from "../../components/TopTitleBar";
import { RouteComponentProps, useHistory } from "react-router";
import NavBar from "../../components/browse/browse";
import { Key, useEffect } from "react";
import "./OrderDetailsPage.css";

interface OrderedDetailsType {
  id: number;
  single_item_id?: number;
  package_id?: number;
  img: string;
  description: string;
  quantity: number;
  price: number;
}

const OrderItemByUser = (props: OrderedDetailsType) => {
  return (
    <IonCard>
      <div className="orderedImage">
        <img src={props.img} />
      </div>
      <div className="order">
        <div className="orderPrice">{props.description}</div>
      </div>
      <div className="order">
        <div className="orderPrice">Quantity:</div>
        <div>{props.quantity}</div>
      </div>
      <div className="order">
        <div className="orderPrice">Price: HK$</div>
        <div>{props.price}</div>
      </div>
    </IonCard>
  );
};

export default function OrderDetailsPage(
  props: RouteComponentProps<{ id: string }>
) {
  // console.log("OrderDetailsPage_props.match.params.id:", props.match.params.id);

  const history = useHistory();

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

  const {
    data: orderDetailsInfo,
    isLoading,
    error,
    data,
    refetch,
  } = useQuery({
    queryKey: ["profile/getOrderItems"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_SERVER}/profile/orderDeatails/${props.match.params.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Cannot get Order Details!");
      }
      return await res.json();
    },
    enabled: false,
  });

  console.log("orderDetailsInfo:", orderDetailsInfo)

  useIonViewWillEnter(() => {
    refetch();
  });

  useEffect(() => {
    refetch();
  }, [props.match.params.id]);

  return (
    <>
      {" "}
      <IonPage>
        <IonHeader>
          <TopTitleBar />
        </IonHeader>
        <NavBar onItemClick={onItemClick} />
        <IonContent>
          <div className="orderedMaterials">Ordered Materials:</div>

          {orderDetailsInfo &&
            orderDetailsInfo.length > 0 &&
            orderDetailsInfo.map((item: any, index: Key) => (
              <OrderItemByUser
                id={item.order_id}
                img={item.item.photo}
                description={item.item.description}
                quantity={item.quantity}
                price={item.item.price}
                key={index}
              />
            ))}

          {orderDetailsInfo && orderDetailsInfo.length > 0 && (
            <>
              <div className="totalItems">
                Total Items: {orderDetailsInfo.length}
              </div>
              <div className="totalItems">
                Total Amount: HK$ {orderDetailsInfo[0].orders.payment}
              </div>
              <div className="totalItems">
                Delivery Date: {orderDetailsInfo[0].orders.deliver_date}
              </div>
              <div className="totalItems">
                Delivery Time: {orderDetailsInfo[0].orders.deliver_time}
              </div>
              <div className="totalItems">
                Contact Number: {orderDetailsInfo[0].orders.mobile}
              </div>
            </>
          )}
        </IonContent>
      </IonPage>
    </>
  );
}
