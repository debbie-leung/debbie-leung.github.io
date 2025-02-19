import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import mapImage from '../media/world_map.png';
import { TravelType } from '../enums/TravelType';
import { tagCategoryColors, TagProps } from '../reusables/Tag';
import MouseHoverPopover from '../reusables/MouseHoverPopover';

export interface Hotspot {
  country: string;
  city: string;
  latitude: number;
  longitude: number;
  description: string;
  category: TravelType;
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

interface InteractiveMapProps {
  hotspots: Hotspot[];
  selectedFilters: TagProps[];
}

const InteractiveMap = ({ hotspots, selectedFilters }: InteractiveMapProps) => {
  const [selectedHotspots, setSelectedHotspots] = useState<Hotspot[] | null>(hotspots);

  useEffect(() => {
    if (selectedFilters.length > 0) {
      setSelectedHotspots(hotspots.filter(hotspot => selectedFilters.some(filter => hotspot.category === filter.name)));
    } else {
      setSelectedHotspots(hotspots);
    }
  }, [hotspots, selectedFilters]);

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
      {selectedHotspots.map((hotspot, index) => (
        <MouseHoverPopover key={index} content={hotspot.description}>
          <Box
            sx={{
              position: 'absolute',
              top: `${convertToPercentage(hotspot.latitude, true)}%`,
              left: `${convertToPercentage(hotspot.longitude, false)}%`,
              width: '1vw',
              height: '1vw',
              backgroundColor: tagCategoryColors[hotspot.category].bgColor,
              borderRadius: '50%',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: tagCategoryColors[hotspot.category].bgColor.replace(/0.5\)$/, '0.8)'),
              },
            }}
          />
        </MouseHoverPopover>
      ))}
    </Box>
  );
};

export default InteractiveMap;