import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaDiscord } from "react-icons/fa"; 
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
    TeamPage,
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
    const location = useLocation();
    const swiperRef = useRef(null);

    useEffect(() => {
        const slideMap = { 'welcome': 0, 'champion': 1, 'trailer': 2, 'team': 3, 'credit': 4 };
        const slideIndex = slideMap[location.state?.slide];
        if (slideIndex !== undefined && swiperRef.current?.swiper) {
            swiperRef.current.swiper.slideTo(slideIndex);
        }
    }, [location, swiperRef]);
    return (
        <>
            <Swiper {...swiperOptions} ref={swiperRef}>
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
                    {({ isActive }) => <TeamPage isActive={isActive}/>}
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
            <div className="discord-icon">
                <a href="https://discord.gg/cosmicrafts-884272584491941888" target="_blank" rel="noopener noreferrer">
                    <FaDiscord size={30} />
                </a>
            </div>
        </>
    )
}

export default Home
