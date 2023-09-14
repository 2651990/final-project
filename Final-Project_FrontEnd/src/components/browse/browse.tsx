import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import '../leasing/leasingItemsStyles.css'

export interface NavBar {
    onItemClick: (item: string) => void
}

export default function navBar(props: NavBar) {
    const [items, setItems] = useState([
        "Guidelines",
        "Items",
        "Packages",
        "Home",
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


