import React from 'react';
import { Tooltip, Box } from '@mui/material';
import mapImage from '../media/world_map.png'; // Import your track image

const InteractiveMap = () => {
  const hotspots = [
    { id: 20, top: 10, left: 20, description: "Description for Sector 20: High-speed corner requiring precise braking." },
    { id: 18, top: 80, left: 25, description: "Description for Sector 18: Tight chicane with high downforce." },
    // Add more hotspots as needed
  ];

  return (
    <Box sx={{ 
      position: 'relative', 
      display: 'flex', 
      justifyContent: 'center',
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden'
    }}>
      <img 
        src={mapImage} 
        alt="F1 Track Map" 
        style={{ 
          width: '100%', 
          height: 'auto',
          maxWidth: '100%',
          objectFit: 'contain'
        }} 
      />
      {hotspots.map((hotspot) => (
        <Tooltip key={hotspot.id} title={hotspot.description} arrow>
          <Box
            sx={{
              position: 'absolute',
              top: `${hotspot.top}%`,
              left: `${hotspot.left}%`,
              width: '1.5vw',
              height: '1.5vw',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              borderRadius: '50%',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 0, 0.8)',
              },
            }}
          />
        </Tooltip>
      ))}
    </Box>
  );
};

export default InteractiveMap;