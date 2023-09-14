import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './leasingItemsStyles.css';
import { useState } from 'react';

export interface LeasingItemsMenuProps {
    onItemClick: (item: string) => void
}

export default function LeasingItemsMenu(props: LeasingItemsMenuProps) {
    const [items, setItems] = useState([
        "Tents",
        "Sleeping Bags",
        "Shelters",
        "Air Pillows",
        "Sleeping Pads",
        "Stoves",
        "Cooking Utensils",
        "Furniture",
        "Lighting Supplies",
        "Accessories",
    ])

    return (
        <div >

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
                    items?.length > 0 && items.map((item, index) => (
                        <SwiperSlide className='menuSlider' key={index} onClick={() => props.onItemClick(item)}>
                            {item}
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}