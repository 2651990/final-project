import { Redirect, Route, useHistory } from "react-router-dom";
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./theme/variables.css";
import MyCart from "./pages/myCart/MyCart";
import Profile from "./pages/profile/Profile";
import LeasingItemsPage from "./pages/browse/LeasingItemsPage";
import LeasingPackagesPage from "./pages/browse/LeasingPackagesPage";
import Guidelines from "./pages/browse/Guidelines";
import Login from "./login/localLogin/Login";
import { FacebookCallback } from "./login/faceBookLogin/FacebookCallback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCommentDots,
  faTent,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Browse from "./pages/browse/Browse";
import ItemsDetailsPage from "./components/leasing/ItemsDetailsPage";
import Payment from "./pages/myCart/Payment";
import Contact from "./pages/contact/Contact";
import Register from "./login/localLogin/register";
import { useSelector } from "react-redux";
import { IRootState } from "./redux/store";
import "./App.scss";
import PackagesDetailsPage from "./components/leasing/PackagesDetailsPage";
import OrderDetails from "./pages/profile/OrderDetailsPage";
import OrderDetailsPage from "./pages/profile/OrderDetailsPage";
import Admin from "./pages/contact/Admin";
import { useState } from "react";
setupIonicReact();

const App: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  const isAdmin = useSelector((state: IRootState) => state.user.isAdmin);
  const isShowTabs = useSelector((state: IRootState) => state.app.isShowTabs);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/myCart">
              <MyCart />
            </Route>

            <Route exact path="/browse">
              <Browse />
            </Route>

            <Route exact path="/admin">
              <Admin />
            </Route>

            <Route exact path="/leasingItems">
              <LeasingItemsPage />
            </Route>

            <Route
              exact
              path="/itemsDetails/:id"
              component={ItemsDetailsPage}
            />

            <Route exact path="/leasingPackages">
              <LeasingPackagesPage />
            </Route>

            <Route
              exact
              path="/packagesDetails/:id"
              component={PackagesDetailsPage}
            />

            <Route exact path="/payment">
              <Payment />
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route
              exact
              path="/getOrderItemsDetails/:id"
              component={OrderDetailsPage}
            />

            <Route exact path="/contact/:chatroomId">
              <Contact />
            </Route>

            <Route exact path="/guidelines">
              <Guidelines />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/">
              <Redirect to={"/login"}></Redirect>
            </Route>

            <Route exact path="/facebook-callback">
              <FacebookCallback />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom" className={isShowTabs ? "" : "hidden"}>
            <IonTabButton tab="My Cart" href="/myCart">
              <FontAwesomeIcon
                className="tabIcon"
                icon={faCartShopping}
                size="xl"
              />
              <IonLabel>My Cart</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Browse" href="/browse">
              <FontAwesomeIcon className="tabIcon" icon={faTent} size="xl" />
              <IonLabel>Browse</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Profile" href="/profile">
              <FontAwesomeIcon className="tabIcon" icon={faUser} size="xl" />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>

            {isAdmin && (
              <IonTabButton tab="Admin" href="/admin">
                <FontAwesomeIcon
                  className="adminIcon"
                  icon={faUser}
                  size="xl"
                />
                <IonLabel>Admin</IonLabel>
              </IonTabButton>
            )}
            {!isAdmin && (
              <IonTabButton tab="Contact" href="/contact/client">
                <FontAwesomeIcon
                  className="tabIcon"
                  icon={faCommentDots}
                  size="xl"
                />
                <IonLabel>Message</IonLabel>
              </IonTabButton>
            )}
            
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
