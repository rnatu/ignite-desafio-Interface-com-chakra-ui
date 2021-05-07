import { Box, Text } from '@chakra-ui/react';

interface SwiperContentProps {
  bgimage: string;
  continentTitle: string;
  continentDescription: string;
}

export function SwiperContent({
  bgimage,
  continentTitle,
  continentDescription,
}: SwiperContentProps): JSX.Element {
  return (
    <Box
      bgImg={`url(${bgimage})`}
      width="100%"
      height="100%"
      bgPosition="center"
      backgroundSize="cover"
    >
      <Text
        mt={['100px', '200px']}
        color="gray.50"
        fontSize={['1.5rem', '2rem', '3rem']}
        textAlign="center"
        fontWeight="700"
      >
        {continentTitle}
        <Text
          color="gray.100"
          mt={['5px', '1']}
          fontSize={['0.875rem', '1.3rem', '1.5rem']}
          textAlign="center"
          fontWeight="700"
        >
          {continentDescription}
        </Text>
      </Text>
    </Box>
  );
}
