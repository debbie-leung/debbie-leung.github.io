import React from 'react';
import './App.css';
import ImageCard from './components/Card';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import avrHardware from './media/avr_hardware.jpg';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ImageCard image={avrHardware} title="AVR Hardware" description="AVR Hardware is a hardware project that uses the AVR microcontroller." />
    </ThemeProvider>
  );
}

export default App;
