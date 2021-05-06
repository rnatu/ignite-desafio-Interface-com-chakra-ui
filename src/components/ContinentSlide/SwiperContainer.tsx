// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { SwiperContent } from './SwiperContent';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function SwiperContainer(): JSX.Element {
  return (
    <>
      <Swiper
        className="swiperContainer"
        cssMode
        navigation
        pagination
        mousewheel
        keyboard
      >
        <SwiperSlide className="swiperSlide">
          <SwiperContent
            bgimage="./europe.png"
            continentTitle="Europa"
            continentDescription="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <SwiperContent
            bgimage="./europe.png"
            continentTitle="América do Norte"
            continentDescription="teste"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <SwiperContent
            bgimage="./europe.png"
            continentTitle="América do Sul"
            continentDescription="teste"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <SwiperContent
            bgimage="./europe.png"
            continentTitle="Ásia"
            continentDescription="teste"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <SwiperContent
            bgimage="./europe.png"
            continentTitle="África"
            continentDescription="teste"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <SwiperContent
            bgimage="./europe.png"
            continentTitle="Oceania"
            continentDescription="teste"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
