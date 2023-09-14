import { useQuery } from "@tanstack/react-query";

export async function updateCartQty(qty: number) {
  return await fetch(
    `${import.meta.env.VITE_API_SERVER}/cart/item/qty`,
    {
      method: "Patch",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        qty
      })
    }
  );
}

export function fetchCartItems() {
    const {
        data: cartInfo,
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["cartItems"],
        queryFn: async () => {
          let res = await fetch(
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
      return {cartInfo, refetch}
}

export async function fetchDeleteCartItem (id: any) {
  return await fetch(
    `${import.meta.env.VITE_API_SERVER}/cart/deleteCartItem/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
}
export function useStateA() {
    let state: any
    function setState(value: number) {
        state = value
    }
    return [state, setState]
}