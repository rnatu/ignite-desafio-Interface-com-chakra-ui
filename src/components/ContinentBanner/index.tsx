import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
  children: string;
}

export function ContinentBanner({
  children,
}: ContinentBannerProps): JSX.Element {
  return (
    <Flex
      bgImg="url(/europeBanner.png)"
      bgPosition="center"
      bgSize="cover"
      h={['9.37rem', '31rem']}
      justifyContent={['center', 'center', 'left']}
      alignItems={['center', 'center', 'flex-start']}
      pt={[0, 0, '23.06rem']}
      pl={[0, 0, '8.75rem']}
    >
      <Heading fontSize={['1.75rem', '3rem']} fontWeight="600" color="gray.50">
        {children}
      </Heading>
    </Flex>
  );
}
