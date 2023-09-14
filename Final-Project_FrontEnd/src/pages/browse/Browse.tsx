import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonIcon, useIonViewWillEnter } from '@ionic/react';
import { bonfire } from 'ionicons/icons';
import { useHistory } from 'react-router';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavBar from "../../components/browse/browse";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../ProjectPhotos/Tents/DOD One Pole Tent 5P5.jpg';
import photo2 from '../../ProjectPhotos/campinghk.jpg';
import photo3 from '../../ProjectPhotos/campinghk1.jpg';
import photo4 from '../../ProjectPhotos/Furniture/nature hike alloy ultra light foldable table_large2.jpg';
import photo5 from '../../ProjectPhotos/Accessories/28l vacuum fridge 2.jpg';
import photo6 from '../../ProjectPhotos/Air Pillows/costume style air pillow greyyellow1.jpg';
import photo7 from '../../ProjectPhotos/Cooking Utensils/fire_maple fmc_206 cookware_1.jpg';
import photo8 from '../../ProjectPhotos/Furniture/folding table with aluminum surface_large2.jpg';
import photo9 from '../../ProjectPhotos/Lighting Supplies/classic led lamp_black2.jpg';
import photo10 from '../../ProjectPhotos/Shelters/nature hike sunrise hexagonal tarps 3.jpg';
import photo11 from '../../ProjectPhotos/Sleep Bags/Nature Hike Envelope Style Sleeping Bag With Hood U350 O4.jpg';
import photo12 from '../../ProjectPhotos/Sleeping Pads/etrol sleep mat big blue3.jpg';
import photo13 from '../../ProjectPhotos/Stoves/soto st_310 regulator stove.jpg';
import photo14 from '../../ProjectPhotos/Tents/Nature Hike Knight 3 Tent 3P2.jpg';
import '../../components/browse/browse.css'
import TopTitleBar from '../../components/TopTitleBar';
import { useDispatch } from 'react-redux';
import { appAction } from '../../redux/appSlice';
import { useSocket } from '../../hook/useSocket';

const Browse: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const {ws, turnOnSocket} = useSocket()

  const goToPage = (path: string) => {
    history.push(path);
  };

  const fridge = () => {
    history.push("/itemsDetails/2")
  }

  const pillow = () => {
    history.push("/itemsDetails/8")
  }

  const cooking = () => {
    history.push("/itemsDetails/14")
  }

  const table = () => {
    history.push("/itemsDetails/19")
  }

  const lighting = () => {
    history.push("/itemsDetails/33")
  }

  const shelter = () => {
    history.push("/itemsDetails/41")
  }

  const sleepingBag = () => {
    history.push("/itemsDetails/51")
  }

  const sleepingPad = () => {
    history.push("/itemsDetails/56")
  }

  const stove = () => {
    history.push("/itemsDetails/70")
  }

  const tent = () => {
    history.push("/itemsDetails/76")
  }

  const onItemClick = (item: string) => {
    // dispatch(appAction.changeTitle({title: item}))
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

  useIonViewWillEnter(() => {
    dispatch(appAction.updateIsShowTab(true));
    // console.log("useIonViewWillEnter")
    // turnOnSocket()
    // console.log(ws)
  })

  return (
    <IonPage>
      <IonHeader>
        <TopTitleBar />
        <NavBar onItemClick={onItemClick} />
      </IonHeader>

      <IonContent>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
              <div className="carousel-item-content">
                <img
                  className="img-fluid"
                  src={photo1}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
              <div className="carousel-item-content">
                <img
                  className="img-fluid"
                  src={photo2}
                  alt="Second slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
              <div className="carousel-item-content">
                <img
                  className="img-fluid"
                  src={photo3}
                  alt="Third slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
              <div className="carousel-item-content">
                <img
                  className="img-fluid"
                  src={photo4}
                  alt="Fourth slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className='hot-items'>
          <IonIcon icon={bonfire} id='fire' style={{ marginLeft: '8px', marginRight: '10px' }} />
          Hot items
        </div>
        <div className='hotPhotoContainer'>
          <div className='hot-photo-icon'>
            <img src={photo5} onClick={fridge} />
            <img src={photo6} onClick={pillow} />
            <img src={photo7} onClick={cooking} />
            <img src={photo8} onClick={table} />
            <img src={photo9} onClick={lighting} />
            <img src={photo10} onClick={shelter} />
            <img src={photo11} onClick={sleepingBag} />
            <img src={photo12} onClick={sleepingPad} />
            <img src={photo13} onClick={stove} />
            <img src={photo14} onClick={tent} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Browse;