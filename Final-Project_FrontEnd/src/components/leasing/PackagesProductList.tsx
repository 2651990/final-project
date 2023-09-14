import { useIonViewWillEnter } from "@ionic/react"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import './leasingPackagesStyles.css'
import { useHistory } from "react-router"

type productDisplayType = {
    id: number
    img: string
    description: string
    price: number
}

type ItemsProductListProps = {
    selectedPackage: string
}

const PackageDisplayInfo = (props: productDisplayType) => {

    const history = useHistory()

    return (
        <>
            <div>
                <div className="packagesImage" onClick={() => history.push(`/packagesDetails/${props.id}`)}><img src={props.img} /></div>
                <div className='description'>{props.description} HK$ {props.price}</div>
            </div>
        </>
    )
}

export default function PackageProductList(props:ItemsProductListProps) {
    const { data: packageInfo, isLoading, refetch } = useQuery<any[]>({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_SERVER}/leasing-packages/packages/${props.selectedPackage}`)
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
    }, [props.selectedPackage])

    return (
        <div className='displayStyle'>
            {packageInfo && packageInfo?.length > 0 &&
                packageInfo.map((item, index) =>
                    <PackageDisplayInfo id={item.id} img={item.photo} description={item.description} price={item.price} key={index} />)}
        </div>
    )
}