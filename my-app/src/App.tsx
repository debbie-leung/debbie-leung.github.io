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
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', paddingBottom: { xs: '80px', md: 0 } }}>
          <TabContent />
          <Typography variant="caption" sx={{ 
            textAlign: 'right', 
            position: 'sticky', 
            bottom: 0, 
            right: 0, 
            padding: 2, 
            backgroundColor: 'background.default',
            zIndex: 1,
            display: { xs: 'none', md: 'block' },
            marginTop: 'auto',
          }}>
            ©2025 Website built in React and Material UI
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
