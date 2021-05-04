import { Flex, Image, Text, FlexProps } from '@chakra-ui/react';

interface TopicsProps extends FlexProps {
  src: string;
  title: string;
  alt: string;
}

export function Topics({ src, title, alt, ...rest }: TopicsProps): JSX.Element {
  return (
    <Flex direction="column" align="center" {...rest}>
      <Image src={src} alt={alt} width="5.31rem" />
      <Text pt="6">{title}</Text>
    </Flex>
  );
}
