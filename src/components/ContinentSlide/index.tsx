import { Box } from '@chakra-ui/react';
import { SwiperContainer } from './SwiperContainer';

export function ContinentSlide(): JSX.Element {
  return (
    <Box mx="auto" mb="2.5rem" pt="3.25rem" px="2rem" maxWidth="1240px">
      <SwiperContainer />
    </Box>
  );
}
