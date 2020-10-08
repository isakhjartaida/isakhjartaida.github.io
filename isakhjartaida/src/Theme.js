import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import charterEot from './fonts/charter_regular-webfont.eot';
import charterWoff from './fonts/charter_regular-webfont.woff';
import charterTtf from './fonts/charter_regular-webfont.ttf';

const charter = {
  fontFamily: 'charter',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('charter'),
    url(${charterEot}) format('embedded-opentype'),
    url(${charterWoff}) format('woff'),
    url(${charterTtf}) format('truetype'),
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#a3b899',
    },
    primary: {
      main: '#f8d3c5',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [charter],
      },
    },
  },
});

function Theme(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
}

export default Theme;
