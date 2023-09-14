import { IonContent, IonHeader, IonIcon, IonPage } from "@ionic/react"
import TopTitleBar from "../../components/TopTitleBar"
import './Payment.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCampground, faCreditCard, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"

export default function Payment() {
    return (
        <IonPage>
            <IonHeader>
                <TopTitleBar />
            </IonHeader>

            <IonContent>
                <div className="paymentDone"> <FontAwesomeIcon icon={faCreditCard} style={{color: "#450f70",}} /> Payment Completed </div>
                <div className="thankYou">
                    <div>Thank you for choosing Camp Express!</div>
                    <div><FontAwesomeIcon icon={faCampground} style={{ color: "#e14837", }} /> Hope you enjoy your Camping~  <FontAwesomeIcon icon={faCampground} style={{ color: "#e14837", }} /></div>
                </div>

                <div className="content">
                <br></br> 
                    We will contact & re-confirm you By <FontAwesomeIcon icon={faPhoneVolume} style={{color: "#216e4a",}} /> 
                    <div>2 Days before your Delivery.</div>
                </div>

            </IonContent>
        </IonPage>
    )
}