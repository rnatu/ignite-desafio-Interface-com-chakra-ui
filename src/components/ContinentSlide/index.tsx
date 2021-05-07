import { Box } from '@chakra-ui/react';
import { SwiperContainer } from './SwiperContainer';

export function ContinentSlide(): JSX.Element {
  return (
    <Box
      mx="auto"
      mb={['1.5rem', '1.50rem', '2.25rem']}
      pt={['1.25rem', '1.50rem', '2.25rem']}
      px={['0', '1.50rem', '2.25rem']}
      maxWidth="1240px"
      h={['15.62rem', '1.50rem', '2.25rem']}
    >
      <SwiperContainer />
    </Box>
  );
}
