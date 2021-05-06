import {
  Flex,
  Image,
  Text,
  FlexProps,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

interface TopicsProps extends FlexProps {
  src: string;
  title: string;
  alt: string;
}

export function Topics({ src, title, alt }: TopicsProps): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction={{ base: 'row', lg: 'column' }} alignItems="center">
      {isWideVersion ? (
        <Image src={src} alt={alt} width="5.31rem" />
      ) : (
        <Box
          border="8px"
          borderColor="yellow.500"
          borderStyle="solid"
          borderRadius="50%"
          mr="2"
        />
      )}
      <Text>{title}</Text>
    </Flex>
  );
}
