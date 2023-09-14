import { Key, useCallback, useEffect, useState } from 'react';
import { IonContent, IonPage, useIonViewWillEnter } from '@ionic/react';
import { Carousel } from 'react-responsive-carousel';
import { RouteComponentProps } from 'react-router';
import { useQuery } from '@tanstack/react-query';




interface ItemsAllDisplayPhotos {
    img: string  
}

type AllDisplayPhotosType = {
    id: number
}

type SingleItemType = {
    id: number
    photo: string
    singleItemId: number
}

function ItemPhoto({img}:ItemsAllDisplayPhotos){
    // console.log(img)
    return (
        <>
            <img src={img} />
        </>
    )
}


export default function AllDisplayPhotos(props: AllDisplayPhotosType) {
    

    const { data: detailsInfo, isLoading, refetch } = useQuery<any>({
        queryKey: ["todos", props.id],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_SERVER}/leasing-items/itemDetails/${props.id}`)
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }

            return await res.json()
        },
        enabled: false
    });

    console.log("photos:", detailsInfo)


    useIonViewWillEnter(() => {
        refetch()
    })

    useEffect(() => {
        refetch()
    }, [props.id])

    return (
        <>
                <Carousel autoPlay={true} interval={2000} infiniteLoop={true}> 
                {detailsInfo && detailsInfo.single_item_all_photos.length > 0&&
                    detailsInfo.single_item_all_photos.map((item: SingleItemType, index: Key) => 
                        <ItemPhoto key={index} img={item.photo} />
                        ) 
                }
                    {/* {allPhotos.map((photo: string, index: Key) => <ItemPhoto key={index} img={photo} />)} */}
                </Carousel>
        </>
    );
}
