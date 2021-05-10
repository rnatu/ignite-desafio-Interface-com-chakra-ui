import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';

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
      <Link
        as="a"
        href={`/continent/${continentTitle}`}
        _hover={{ textDecoration: 'none' }}
      >
        <Box _hover={{ opacity: '0.7', transition: '.3s' }}>
          <Heading
            mt={['100px', '200px']}
            color="gray.50"
            fontSize={['1.5rem', '2rem', '3rem']}
            fontWeight="700"
          >
            {continentTitle}
          </Heading>
          <Text
            color="gray.100"
            mt={['5px', '1']}
            fontSize={['0.875rem', '1.3rem', '1.5rem']}
            fontWeight="700"
          >
            {continentDescription}
          </Text>
        </Box>
      </Link>
    </Box>
  );
}
