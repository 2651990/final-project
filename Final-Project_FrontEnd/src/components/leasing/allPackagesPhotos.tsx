import { useIonViewWillEnter } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { Key, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';

interface ItemsAllDisplayPhotos {
    img: string  
}

type AllDisplayPhotosType = {
    id: number
}

type PackageType = {
    id: number
    photo: string
    packageId: number
}

function PackagePhoto({img}: ItemsAllDisplayPhotos){
    // console.log(img)
    return (
        <>
            <img src={img} />
        </>
    )
}

export default function PackageAllDisplayPhotos(props: AllDisplayPhotosType) {
    
    const { data: detailsInfo, isLoading, refetch } = useQuery<any>({
        queryKey: ["package", props.id],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_SERVER}/leasing-packages/packageDetails/${props.id}`)
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
    }, [props.id])
    
    return (
<>
                <Carousel autoPlay={true} interval={2000} infiniteLoop={true}> 
                {detailsInfo && detailsInfo.package_all_photos.length > 0&&
                    detailsInfo.package_all_photos.map((item: PackageType, index: Key) => 
                        <PackagePhoto key={index} img={item.photo} />
                        ) 
                }
                </Carousel>
        </>
    )
}