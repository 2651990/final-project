import { IonContent, IonHeader, IonPage } from "@ionic/react"
import LeasingItemsMenu from "../../components/leasing/LeasingItemsMenu"
import ItemsProductList from "../../components/leasing/ItemsProductList"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useLocation, useParams } from "react-router-dom"
import TopTitleBar from "../../components/TopTitleBar"

export default function LeasingItemsPage() {
    const location = useLocation();
    // console.log(location)

    const [selectedItem, setSelectedItem] = useState("Tents")

    useEffect(() => {
        const searchingURLParams = new URLSearchParams(location.search)
        if (searchingURLParams.has("item")) {
            setSelectedItem(searchingURLParams.get("item")!)
        }
    }, [location])

    const onItemClick = (item: string) => {
        // console.log(item)
        setSelectedItem(item)
    }

    return (
        <IonPage>
            <IonHeader>
                <TopTitleBar />
                <LeasingItemsMenu onItemClick={onItemClick} />
            </IonHeader>
            <IonContent>
                <ItemsProductList selectedItem={selectedItem} />
            </IonContent>
        </IonPage>
    )
}