import {
    Swiper,
    SwiperSlide
} from 'swiper/react'

import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination,
    Navigation,  // Import Navigation module
    Keyboard  
} from 'swiper'


import {
    Welcome,
    Champion,
    ChampionDetail,
    Trailer,
    Credit
} from '../components/home-section'

import { championsData } from '../assets/dummy'

// Use Navigation and Keyboard globally
SwiperCore.use([Mousewheel, Pagination, EffectFade, Navigation, Keyboard]);

const swiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 1000,
    keyboard: true
};

const Home = () => {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    {({ isActive }) => <Welcome isActive={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Champion isActive={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Trailer isActive={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Credit isActive={isActive}/>}
                </SwiperSlide>
            </Swiper>
            {
                championsData.map((item, index) => <ChampionDetail
                    key={index}
                    item={item}
                    id={index}
                />)
            }
            <div className="scroll">
                <span>Swipe, Scroll, or use Keys to Explore</span>
            </div>
        </>
    )
}

export default Home
