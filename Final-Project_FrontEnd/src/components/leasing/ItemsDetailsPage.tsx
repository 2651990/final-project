import { IonContent, IonHeader, IonPage, useIonViewWillEnter } from "@ionic/react";
import LeasingItemsMenu from "./LeasingItemsMenu";
import { useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import './ItemsDetailsPage.css'
import AllDisplayPhotos from "./allItemsPhotos";
import TopTitleBar from "../TopTitleBar";

type ProductDetailsType = {
    id: number
    img: string
    description: string
    price: number
    details: string
}

interface DetailsInfo {
    id: number;
    type_name: string;
    description: string;
    details: string;
    photo: string;
    price: number;
    single_item_all_photos: SingleItemAllPhoto[];
}

interface SingleItemAllPhoto {
    id: number;
    photo: string;
    single_item_id: number;
}

interface AddToCart {
    single_item_id?: number,
    package_id?: number,
    quantity: 1
}

const ProductDetailsInfo = (props: ProductDetailsType) => {

    const queryClient = useQueryClient()

    const addToCart = () => {

        const addToCart: AddToCart = {
            single_item_id: props.id,
            quantity: 1
        }
        addItemIntoCartMutation.mutate(addToCart)
    }

    const history = useHistory()
    const addItemIntoCartMutation = useMutation({
        mutationFn: async (addToCart: AddToCart) => {
            const res = await fetch(
                `${import.meta.env.VITE_API_SERVER}/cart/addToCart`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(addToCart),
                }
            );
            if (!res.ok) {
                alert("Cannot add to Cart");
            }
            return await res.json();
        },
        onSuccess: async (data: any) => {
            history.push("/leasingItems")
        },
    });

    return (
        <>
            <div>
                <AllDisplayPhotos id={props.id} />
                <div className="descriptionPrice">{props.description}</div>
                <div className="descriptionPrice">HK${props.price}</div>

                <div className="addToCart" onClick={addToCart}>Add to Cart</div>
                <div className="productDetails">{props.details}</div>
            </div>
        </>
    )
}

export default function ItemsDetailsPage(props: RouteComponentProps<{ id: string }>) {
    console.log("props.match.params.id:", props)

    const { data: detailsInfo, isLoading, refetch } = useQuery<DetailsInfo>({
        queryKey: ["todos", props.match.params.id],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_SERVER}/leasing-items/itemDetails/${props.match.params.id}`)
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }
            return await res.json()
        },
        enabled: false
    });

    useIonViewWillEnter(() => {
        refetch()
    })

    useEffect(() => {
        refetch()
    }, [props.match.params.id])

    return (
        <IonPage>
            <IonHeader>
                <TopTitleBar/>
            </IonHeader>

            <IonContent>
                {detailsInfo && <ProductDetailsInfo id={detailsInfo.id} img={detailsInfo.single_item_all_photos[0].photo} description={detailsInfo.description} price={detailsInfo.price} details={detailsInfo.details} key={detailsInfo.id} />}
            </IonContent>
        </IonPage>
    )
}