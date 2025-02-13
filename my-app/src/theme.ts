import { createTheme } from '@mui/material/styles';

// Augment the palette to include a salmon color
declare module '@mui/material/styles' {
  interface Palette {
    tool: Palette['primary'];
    technology: Palette['primary'];
    topic: Palette['primary'];
  }

  interface PaletteOptions {
    tool?: PaletteOptions['primary'];
    technology?: PaletteOptions['primary'];
    topic?: PaletteOptions['primary'];
  }
}

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
  // palette: {
  //   primary: {
  //     main: '#dc143c', // Your primary color
  //     // hardware: '#dc143c',
  //     // software: '#dc004e',
  //   },
  //   secondary: {
  //     main: '#6495ED', // Your secondary color
  //   },
  // },
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    tool: theme.palette.augmentColor({
      color: {
        main: '#dc143c',
      },
      name: 'tool',
    }),
    technology: theme.palette.augmentColor({
      color: {
        main: '#6495ED',
      },
      name: 'technology',
    }),
    topic: theme.palette.augmentColor({
      color: {
        main: '#32CD32',
      }, 
      name: 'topic',
    }),
  },
});

export default theme; 