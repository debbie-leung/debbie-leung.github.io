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
    <Grid container sx={{ flexDirection: { xs: "column", md: "row"} }}>
      <Grid size={{ xs: 12, md: 3 }} sx={{ position: { xs: 'static', md: 'sticky' }, top: 0, height: { xs: 'auto', md: '100vh' } }}>
        <Profile colorMode={mode as Mode} handleModeChange={setMode} />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }} sx={{ paddingRight: { xs: 0, md: 3 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <TabContent />
          <Typography variant="caption" sx={{ textAlign: 'right', marginBottom: 2 }}>
            ©2025 Website coded in React and Material UI
          </Typography>
        </Box>
      </Grid>
    </Grid>
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
