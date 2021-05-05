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
      bgImage={`url(${bgimage})`}
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
        {continentTitle}
        <Text
          color="gray.50"
          mt="1rem"
          fontSize="1.5rem"
          textAlign="center"
          fontWeight="700"
        >
          {continentDescription}
        </Text>
      </Text>
    </Box>
  );
}
