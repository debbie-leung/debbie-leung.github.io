import React from 'react';
import { Container, Typography, Paper, AppBar, Toolbar, Avatar, Button, Box, Divider, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Profile from './components/Profile';
import InteractiveMap from './components/InteractiveMap';

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid size={3}>
          <Profile />
        </Grid>
        <Grid size={9}>
          <InteractiveMap />
        </Grid>
      </Grid>
  </Box>
  );
};

export default App;