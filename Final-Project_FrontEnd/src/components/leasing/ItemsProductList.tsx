import './leasingItemsStyles.css';
import { useIonViewWillEnter } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import { Key, useEffect } from 'react';
import { useHistory } from 'react-router';

type productDisplayType = {
    id: number
    img: string
    description: string
    price: number
}

const ProductDisplayInfo = (props: productDisplayType) => {

    const history = useHistory()

    return (
        <>
            <div className='comboContainer'>
                <div className='ImageContainer' onClick={() => history.push(`/itemsDetails/${props.id}`)}><img src={props.img} /></div>
                <div className='description'>{props.description}</div>
                <div className='price'>HK$ {props.price}</div>
            </div>
        </>
    )
}

type ItemsProductListProps = {
    selectedItem: string
}

export default function ItemsProductList(props: ItemsProductListProps) {
    const { data: productInfo, isLoading, refetch } = useQuery<any>({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_SERVER}/leasing-items/items/${props.selectedItem}`)
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
    }, [props.selectedItem])

    return (

        <div className='displayStyle'>
            {productInfo && productInfo?.length > 0 &&
                productInfo.map((item: { id: number; photo: string; description: string; price: number; }, index: Key | null | undefined) =>
                    <ProductDisplayInfo id={item.id} img={item.photo} description={item.description} price={item.price} key={index} />)}
        </div>

    )
}