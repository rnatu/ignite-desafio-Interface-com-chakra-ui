/* eslint-disable import/prefer-default-export */
import { Box } from '@chakra-ui/react';

export function Header(): JSX.Element {
  return (
    <Box py="27" align="center" justify="center">
      <img src="/logo.svg" alt="logo" />
    </Box>
  );
}
