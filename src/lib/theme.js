import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#ffffff')(props),
    },
  }),
};

const colors = {
  color1: '#2A2D34',
  color2: '#A0DDE6',
  color3: '#80C2AF',
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const fonts = {
  heading: `'Righteous', 'sans-serif'`,
  body: "'Nunito', 'sans-serif'",
};

const theme = extendTheme({ config, styles, fonts, colors });
export default theme;
