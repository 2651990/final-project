import { faBell, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useHistory } from "react-router";
import NavBar from "../../components/browse/browse";
import TopTitleBar from "../../components/TopTitleBar";
import './Guidelines.css'
import photo1 from '../../ProjectPhotos/menu_single.png'
import photo2 from '../../ProjectPhotos/menu_package.png'
import photo3 from '../../ProjectPhotos/addToCart.png'
import photo4 from '../../ProjectPhotos/myCart.png'
import photo5 from '../../ProjectPhotos/order.png'
import photo6 from '../../ProjectPhotos/order_details.png'

export default function Guidelines() {

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

    return (
        <IonPage>
            <IonHeader>
                <TopTitleBar />
            </IonHeader>

            <IonContent>
                <NavBar onItemClick={onItemClick} />
                <div className="guidelineTitle">Step 1: Decide to rent Single Item or Package</div>
                <div>
                    <div><img
                        className="guidelinePhoto"
                        src={photo1}
                    /></div>
                    <div className="stepText">Select "Items" on Menu Bar if you want to rent items by items by your own flavour</div>
                    <div><img
                        className="guidelinePhoto"
                        src={photo2}
                    /></div>
                    <div className="stepText">Select "Packages" if you want to rent a customized camping set</div>
                </div>
                <div className="guidelineTitle">Step 2: Add to Cart</div>
                <div><img
                    className="guidelineAddToCart"
                    src={photo3}
                /></div>
                <div className="stepText">Click "Add To Cart" Button if you want to choose a specific item and you will found them in your Cart</div>
                <div className="guidelineTitle">Step 3: Fill in quantity & Delivery Info</div>
                <div><img
                    className="guidelineAddToCart"
                    src={photo4}
                /></div>
                <div className="stepText">You will see all your added items in "My Cart" page, please adjust your preferred quantity and give us your preferred Delivery Date, Time and Campsite Name as well as your contact number </div>
                <div className="guidelineTitle">Step 4: See order details in Profile page</div>
                <div><img
                    className="guidelineAddToCart"
                    src={photo5}
                /></div>
                <div className="stepText">After order submitted, you can found you new created order in "Profile" page</div>
                <div><img
                    className="guidelineAddToCart"
                    src={photo6}
                /></div>
                <div className="stepText">When you click on a specific order, you can see all order details</div>
                <div className="guidelineTitle">Step 5: Confirm Order</div>
                <div className="stepText">If payment done and everything clear, we will contact you 2 days before your delivery to re-comfirm your booking.</div>
                <div className="stepText">If we found any information in doubt, we will contact you immediately for arrangement</div>
                <div className="guidelineTitle">Step 6: Return Materials Arrangement</div>
                <div className="stepText">On confirmation call, return date and time would be discussed, any materials destruction or lost would result in $500 each Penalty</div>
                <div className="guidelineTitle">Step 7: Bad Weather Arrangement</div>
                <div className="stepText">Delivery Service will be postponed in Typhoon Signal 8 or above and Red/Black Rainstorm Warning </div>
            </IonContent>




        </IonPage>
    )
}