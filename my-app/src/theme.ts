import { createTheme } from '@mui/material/styles';
import { Color } from './enums/Color';

// Augment the palette to include a salmon color
declare module '@mui/material/styles' {
  interface Palette {
    [Color.Red]: Palette['primary'];
    [Color.Green]: Palette['primary'];
    [Color.Blue]: Palette['primary'];
    [Color.Yellow]: Palette['primary'];
    [Color.Purple]: Palette['primary'];
  }

  interface PaletteOptions {
    [Color.Red]?: PaletteOptions['primary'];
    [Color.Green]?: PaletteOptions['primary'];
    [Color.Blue]?: PaletteOptions['primary'];
    [Color.Yellow]?: PaletteOptions['primary'];
    [Color.Purple]?: PaletteOptions['primary'];
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
    [Color.Red]: theme.palette.augmentColor({
      color: {
        main: '#dc143c',
      },
      name: Color.Red,
    }),
    [Color.Blue]: theme.palette.augmentColor({
      color: {
        main: '#6495ED',
      },
      name: Color.Blue,
    }),
    [Color.Green]: theme.palette.augmentColor({
      color: {
        main: '#32CD32',
      }, 
      name: Color.Green,
    }),
    [Color.Yellow]: theme.palette.augmentColor({
      color: {
        main: '#FFC107',
      },
      name: Color.Yellow,
    }),
    [Color.Purple]: theme.palette.augmentColor({
      color: {
        main: '#C107FF',
      },
      name: Color.Purple,
    }),
    
  },
});

export default theme; 