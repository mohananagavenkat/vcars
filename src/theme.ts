import { createTheme } from '@material-ui/core/styles';

const theme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 400,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitTextSizeAdjust: '100%',
        },
        body: {
          WebkitTextSizeAdjust: '100%',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#DD1367',
      light: '#F58AB6',
      dark: '#AE0F51',
      contrast: 'rgba(255, 255, 255, 0.87)',
    },
    hyperLink: '#00A3FF',
    secondary: {
      main: '#007CC2',
      light: '#0FB3FF',
      dark: '#002D42',
      contrast: 'rgba(255, 255, 255, 0.87)',
    },
    error: {
      main: '#F44336',
      light: '#E57373',
      dark: '#D32F2F',
      contrast: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
      contrast: '#FFFFFF',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
      contrast: 'rgba(0, 0, 0, 0.87)',
    },
  },
} as const;
type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key];
};
declare module '@material-ui/core/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}
export default createTheme(theme);
