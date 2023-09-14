import { IonPage, IonHeader, IonContent, useIonViewWillEnter } from "@ionic/react"
import TopTitleBar from "../TopTitleBar"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { RouteComponentProps, useHistory } from "react-router"
import { useEffect } from "react"
import PackageAllDisplayPhotos from "./allPackagesPhotos"
import './ItemsDetailsPage.css'

type PackageDetailsType = {
    id: number
    img: string
    description: string
    price: number
    details: string
}

interface AddToCart {
    single_item_id?: number,
    packages_id?: number,
    quantity: 1
}

interface DetailsInfo {
    id: number;
    package_name: string;
    description: string;
    details: string;
    photo: string;
    price: number;
    package_all_photos: PackageAllPhoto[];
}

interface PackageAllPhoto {
    id: number;
    photo: string;
    package_id: number;
}

const PackageDetailInfo = (props: PackageDetailsType) => {

    const query = useQueryClient()

    const addToCart = () => {

        const addToCart: AddToCart = {
            packages_id: props.id,
            quantity: 1
        }
        // console.log("addToCart:", addToCart) 
        addPackageIntoCartMutation.mutate(addToCart)

    }

    const history = useHistory()
    const addPackageIntoCartMutation = useMutation({
        mutationFn: async (addToCart: AddToCart) => {
            // console.log("addPackageIntoCartMutation:",addToCart)
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
            console.log("data:", data);
            // await queryClient.invalidateQueries({ queryKey: ["cartItems"] })
            history.push("/leasingPackages")
        },
    });

    return (
        <>
            <div>
                <PackageAllDisplayPhotos id={props.id} />
                <div className="descriptionPrice">{props.description}</div>
                <div className="descriptionPrice">HK${props.price}</div>

                <div className="addToCart" onClick={addToCart}>Add to Cart</div>
                <div className="productDetails">{props.details}</div>
            </div>
        </>
    )
}

export default function PackagesDetailsPage(props: RouteComponentProps<{ id: string }>) {
    // console.log("props.match.params.id:", props.match.params.id)

    const { data: detailsInfo, isLoading, refetch } = useQuery<DetailsInfo>({
        queryKey: ["todos", props.match.params.id],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_SERVER}/leasing-packages/packageDetails/${props.match.params.id}`)
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }
            return await res.json()
        },
        enabled: false
    });
    console.log("PackagesDetailsPage:", detailsInfo)



    useIonViewWillEnter(() => {
        refetch()
    })

    useEffect(() => {
        refetch()
    }, [props.match.params.id])


    return (
        <IonPage>
            <IonHeader>
                <TopTitleBar />
            </IonHeader>

            <IonContent>
                {detailsInfo && <PackageDetailInfo id={detailsInfo.id} img={detailsInfo.package_all_photos[0].photo} description={detailsInfo.description} price={detailsInfo.price} details={detailsInfo.details} key={detailsInfo.id} />}
            </IonContent>
        </IonPage>
    )
}