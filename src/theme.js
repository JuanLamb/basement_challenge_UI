import { extendTheme } from '@chakra-ui/react';

// Setup of Chakra theme
export default extendTheme({
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
  },
  fonts: {
    body: 'Basement Grotesque',
  },
  styles: {
    global: {
      'html, body, #root': {
        height: '100%',
      },
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
});
