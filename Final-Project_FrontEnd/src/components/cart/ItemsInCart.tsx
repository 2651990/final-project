import { IonCard, useIonViewWillEnter } from "@ionic/react";
import "./ItemsInCart.css";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { fetchCartItems, fetchDeleteCartItem, useStateA } from "../../api/cart.query";

interface SelectedItemsType {
  single_item_id?: number
  package_id?: number
  img: string
  description: string
  price: number
  refetchCart: () => void
  id: number
}

const SelectedItems = (props: SelectedItemsType) => {
  const [num, setNum] = useState(1);
  const [price, setPrice] = useState(props.price)

  const mutation = useMutation({
    // updateCartQty
    onSuccess: () => {

    }
  })
  const add = () => {
    setNum(num + 1);
    mutation.mutate()
  };

  const minus = () => {
    if (num > 1) {
      setNum(num - 1);
      mutation.mutate()
    }
  };

  const singlePrice = props.price

  useEffect(() => {
    setPrice(num * singlePrice)
  }, [num])

  const onDelete = (id: number) => {
    deleteCartItemMutation.mutate(id)

  }

  const deleteCartItemMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = fetchDeleteCartItem(id)
    },
    onSuccess() {
      props.refetchCart()
    }
  })


  return (
    <IonCard>
      <div className="ImgContainer">
        <div className="cartImage">
          <img src={props.img} />
        </div>
        <div><FontAwesomeIcon className="cancel" icon={faXmark} onClick={() => onDelete(props.id)} /></div>
      </div>
      <div className="cartDescription">{props.description}</div>
      <div className="cartContainer">
        <div className="minus" onClick={minus}>
        {/* <div className="minus"> */}
          -
        </div>
        <div className="quantity">{num}</div>
        <div className="add" onClick={add}>
        {/* <div className="add"> */}
          +
        </div>
        <div className="cartPrice">HK${price}</div>
      </div>
    </IonCard>
  );
};

export default function SelectedItemInCart() {

  const {cartInfo, refetch} = fetchCartItems()

  // const [name, setName] = useState()

  // const [state, setState] = useStateA()

  console.log("cartInfo:", cartInfo)

  useIonViewWillEnter(() => {
    refetch();
  });

  return (
    <>
      {cartInfo?.length > 0 &&
        cartInfo.map((item: any, index: number) => (
          <SelectedItems
            key={index}
            description={item.item.description}
            img={item.item.photo}
            price={item.item.price}
            refetchCart={refetch}
            id={item.id}
          />
        ))}
    </>
  );
}
