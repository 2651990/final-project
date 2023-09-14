import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import LeasingPackagesMenu from "../../components/leasing/LeasingPackagesMenu"
import PackagesProductList from "../../components/leasing/PackagesProductList"
import { useState } from "react"
import TopTitleBar from "../../components/TopTitleBar"


export default function LeasingPackagesPage() {
    const [selectedItem, setSelectedItem] = useState("Grand")

    const onPackageClick = (item: string) => {
        setSelectedItem(item)
    }

    return (
        <IonPage>
            <IonHeader>
                <TopTitleBar />
                <LeasingPackagesMenu onPackageClick={onPackageClick} />
            </IonHeader>

            <IonContent>
                <PackagesProductList selectedPackage={selectedItem} />
            </IonContent>
        </IonPage>
    )
}