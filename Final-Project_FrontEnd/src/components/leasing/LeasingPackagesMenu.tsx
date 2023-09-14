import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import './leasingPackagesStyles.css'

export interface LeasingPackagesMenuProps {
    onPackageClick: (item: string) => void
}

export default function LeasingPackagesMenu(props: LeasingPackagesMenuProps) {
    const [packages, setPackages] = useState([
        "Grand",
        "Chill",
        "Double",
        "Basic",
    ])

    return (
        <div>
            <Swiper
                slidesPerView={3}
                centeredSlides={false}
                grabCursor={true}

                breakpoints={{
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                }}
            >
                {
                    packages?.length > 0 && packages.map((item, index) => (
                        <SwiperSlide className='menuSlider' key={index} onClick={() => props.onPackageClick(item)}>
                            {item}
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    )
}