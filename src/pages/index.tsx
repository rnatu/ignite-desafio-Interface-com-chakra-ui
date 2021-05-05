import { Box, Divider, Text } from '@chakra-ui/react';
import Head from 'next/head';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/core';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <Banner />

        <TravelTypes />

        <Divider
          mt="20"
          mx="auto"
          width="90px"
          borderWidth="1px"
          borderColor="#47585B"
        />

        <Text
          color="blueGray.700"
          fontSize="2.25rem"
          mt="3.25rem"
          textAlign="center"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Box mx="6.25rem" mb="2.5rem">
          <Swiper
            className="swiperContainer"
            cssMode
            navigation
            pagination
            mousewheel
            keyboard
          >
            <SwiperSlide className="swiperSlide">
              <Box
                bgImage="url(./europe.png)"
                width="100%"
                height="100%"
                bgPosition="center"
              >
                <Text
                  mt="180px"
                  color="gray.50"
                  fontSize="3rem"
                  textAlign="center"
                  fontWeight="700"
                >
                  Europa
                  <Text
                    color="gray.50"
                    mt="1rem"
                    fontSize="1.5rem"
                    textAlign="center"
                    fontWeight="700"
                  >
                    O continente mais antigo
                  </Text>
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
          </Swiper>
        </Box>
      </main>
    </div>
  );
}
