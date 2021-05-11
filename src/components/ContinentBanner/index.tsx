import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
  continentTitle: string;
}

export function ContinentBanner({
  continentTitle,
}: ContinentBannerProps): JSX.Element {
  return (
    <Flex
      bgImg="url(/europeBanner.png)"
      bgPosition="center"
      bgSize="cover"
      h={['9.37rem', '31rem']}
    >
      <Flex
        width="1160px"
        mx="auto"
        pt={[0, 0, '23.06rem']}
        px={[0, 0, '1rem', '1rem', 0]}
        justify={['center', 'center', 'normal']}
        align={['center', 'center', 'normal']}
      >
        <Heading
          fontSize={['1.75rem', '3rem']}
          fontWeight="600"
          color="gray.50"
        >
          {continentTitle}
        </Heading>
      </Flex>
    </Flex>
  );
}
