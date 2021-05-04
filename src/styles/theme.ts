/* eslint-disable import/prefer-default-export */
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '66em',
  xl: '80em',
  '2xl': '96em',
});

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#DADADA',
      '50': '#F5F8FA',
    },
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: 'gray.50',
      },
    },
  },
  breakpoints,
});
