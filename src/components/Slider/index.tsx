import { Box } from '@chakra-ui/react';
import { SwiperContainer } from './SwiperContainer';

export function Slider(): JSX.Element {
  return (
    <Box
      // mx="auto"
      mb={['1.5rem', '2.25rem']}
      mt={['1.25rem', '3.25rem']}
      mx={['0', '1.50rem', 'auto']}
      maxWidth="1240px"
      h={['15.62rem', '28.12rem']}
    >
      <SwiperContainer />
    </Box>
  );
}
