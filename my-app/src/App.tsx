import React from 'react';
import Grid from '@mui/material/Grid2';
import Profile from './components/Profile';
import Box from '@mui/material/Box';
import TabContent from './components/TabContent';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid size={3} sx={{ position: 'sticky', top: 0, height: '100vh' }}>
            <Profile />
          </Grid>
          <Grid size={9}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Box sx={{ flexGrow: 1 }}>
                <TabContent />
              </Box>
              <Typography sx={{ textAlign: 'right', marginBottom: 2 }}>©2025 Website coded in React and Material UI</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;