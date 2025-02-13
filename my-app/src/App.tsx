import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Projects />
    </ThemeProvider>
  );
}

export default App;
