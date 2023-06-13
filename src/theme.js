import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

const Container = defineStyleConfig({
  baseStyle: {
    maxW: '1440px',
    display: 'flex',
    flexDirection: 'column',
    px: [4, null, 12, 16, 20]
  }
});

export const theme = extendTheme({
  colors: {
    white: 'hsl(0, 0%, 100%)',
    blue: {
      700: 'hsl(209, 23%, 22%)',
      800: 'hsl(207, 26%, 17%)',
      900: 'hsl(200, 15%, 8%)'
    },
    gray: {
      100: 'hsl(0, 0%, 98%)',
      600: 'hsl(0, 0%, 52%)'
    }
  },
  fonts: {
    body: "'Nunito Sans', sans-serif",
    heading: "'Nunito Sans', sans-serif"
  },
  components: { Container },
  styles: {
    global: {
      '#root': {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }
    }
  }
});
