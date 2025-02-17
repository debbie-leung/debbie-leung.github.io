import React from 'react';
import { Tooltip, Box } from '@mui/material';
import mapImage from '../media/world_map.png';

export interface Hotspot {
  id: number;
  country: string;
  latitude: number;
  longitude: number;
  description: string;
  // category
}

const LATITUDE_OFFSET = 11;
const LONGITUDE_OFFSET = -4;

// Function to convert latitude and longitude to top and left percentages using Mercator projection
const convertToPercentage = (value: number, isLatitude: boolean) => {
  if (isLatitude) {
    // Convert latitude to radians
    const latRad = (value * Math.PI) / 180;
    // Mercator projection formula for y-axis
    const mercatorY = Math.log(Math.tan(latRad) + 1 / Math.cos(latRad));
    // Normalize to 0-100% (flipped for top positioning)
    return 50 - (mercatorY * 100 / Math.PI)  + LATITUDE_OFFSET;
  } else {
    // Longitude is linear in Mercator projection
    return 50 + (value * 100 / 360) + LONGITUDE_OFFSET;
  }
};

const InteractiveMap = ({ hotspots }: { hotspots: Hotspot[] }) => {
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
        alt="World Map" 
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
              top: `${convertToPercentage(hotspot.latitude, true)}%`,
              left: `${convertToPercentage(hotspot.longitude, false)}%`,
              width: '1vw',
              height: '1vw',
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