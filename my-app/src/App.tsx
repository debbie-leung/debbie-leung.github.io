import React from 'react';
import Grid from '@mui/material/Grid2';
import Profile from './components/Profile';
import Box from '@mui/material/Box';
import TabContent from './components/TabContent';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid size={3}>
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
  );
};

export default App;