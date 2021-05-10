// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/core';

import { SwiperContent } from './SwiperContent';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function SwiperContainer(): JSX.Element {
  return (
    <Swiper
      className="swiperContainer"
      cssMode
      navigation
      pagination
      mousewheel
      keyboard
    >
      <SwiperSlide>
        <SwiperContent
          bgimage="/europeSlider.png"
          continentTitle="Europa"
          continentDescription="O continente mais antigo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent
          bgimage="/europeSlider.png"
          continentTitle="América do Norte"
          continentDescription="teste"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent
          bgimage="/europeSlider.png"
          continentTitle="América do Sul"
          continentDescription="teste"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent
          bgimage="/europeSlider.png"
          continentTitle="Ásia"
          continentDescription="teste"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent
          bgimage="/europeSlider.png"
          continentTitle="África"
          continentDescription="teste"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContent
          bgimage="/europeSlider.png"
          continentTitle="Oceania"
          continentDescription="teste"
        />
      </SwiperSlide>
    </Swiper>
  );
}
