import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import Profile from './components/Profile';
import Box from '@mui/material/Box';
import TabContent from './components/TabContent';
import { CssBaseline, ThemeProvider, Typography, useColorScheme } from '@mui/material';
import theme from './theme';
import { Mode } from './enums/Mode';

const App = () => {
  const { mode, systemMode, setMode } = useColorScheme();
  
  // Set a default mode if mode is undefined
  useEffect(() => {
    if (mode === Mode.System) {
      setMode(systemMode);
    }
  }, [mode, systemMode]);

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid size={3} sx={{ position: 'sticky', top: 0, height: '100vh' }}>
            <Profile colorMode={mode as Mode} handleModeChange={setMode} />
          </Grid>
          <Grid size={9} sx={{ paddingRight: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Box sx={{ flexGrow: 1 }}>
                <TabContent />
              </Box>
              <Typography variant="caption" sx={{ textAlign: 'right', marginBottom: 2 }}>
                ©2025 Website coded in React and Material UI
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
};

export default function ToggleColorMode() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
