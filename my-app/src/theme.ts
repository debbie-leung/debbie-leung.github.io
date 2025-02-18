import { createTheme } from '@mui/material/styles';
import { TagColor } from './types/TagColor';

// Augment the palette to include a salmon color
declare module '@mui/material/styles' {
  interface Palette {
    [TagColor.Tool]: Palette['primary'];
    [TagColor.Technology]: Palette['primary'];
    [TagColor.Topic]: Palette['primary'];
  }

  interface PaletteOptions {
    [TagColor.Tool]?: PaletteOptions['primary'];
    [TagColor.Technology]?: PaletteOptions['primary'];
    [TagColor.Topic]?: PaletteOptions['primary'];
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
    [TagColor.Tool]: theme.palette.augmentColor({
      color: {
        main: '#dc143c',
      },
      name: TagColor.Tool,
    }),
    [TagColor.Technology]: theme.palette.augmentColor({
      color: {
        main: '#6495ED',
      },
      name: TagColor.Technology,
    }),
    [TagColor.Topic]: theme.palette.augmentColor({
      color: {
        main: '#32CD32',
      }, 
      name: TagColor.Topic,
    }),
  },
});

export default theme; 