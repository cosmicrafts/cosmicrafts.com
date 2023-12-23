import './champion.scss';
import HomeSection from '../HomeSection';
import ChampionCard from './ChampionCard';
import { bg2 } from '../../../assets/images';
import { championsData } from '../../../assets/dummy';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Champion = ({ isActive }) => (
  <HomeSection
    className={`champion ${isActive ? 'active' : ''}`}
    contentClassName="overlay"
    bgImage={bg2}
  >
    <div className="container relative">
      <div className="champion-list">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={0}
          grabCursor={true}
          nested={true}
          navigation={true}
          keyboard={{ enabled: true }}
        >
          {championsData.map((item, index) => (
            <SwiperSlide key={index}>
              <ChampionCard item={item} id={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </HomeSection>
);

export default Champion;