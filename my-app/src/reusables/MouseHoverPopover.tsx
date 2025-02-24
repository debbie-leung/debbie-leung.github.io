import React, { useState } from 'react';
import { Card, CardContent, CardMedia, IconButton, Popover, Typography } from '@mui/material';
import { Hotspot } from '../components/InteractiveMap';
import ReactCountryFlag from 'react-country-flag';
import { ChevronRight } from '@mui/icons-material';
import { ChevronLeft } from '@mui/icons-material';
import { MediaType } from '../enums/MediaType';

interface MouseHoverPopoverProps {
  data: Hotspot;
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
}

const MouseHoverPopover = ({ data, children }: MouseHoverPopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % data.media.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + data.media.length) % data.media.length);
  };

  return (
    <div>
      {React.cloneElement(children, {
        onMouseEnter: handlePopoverOpen,
        onMouseLeave: handlePopoverClose
      })}
      <Popover
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Card sx={{ width: 300 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              {data.country}
              <ReactCountryFlag countryCode={data.countryCode} svg style={{ width: '1.5em', height: '1.5em', marginLeft: '0.5em' }} />
            </Typography>
          </CardContent>
          <div style={{ position: 'relative' }}>

          <CardMedia
            sx={{ height: 140 }}
            component={MediaType.Image}
            src={data.media[currentImageIndex]}
            />
          {data.media.length > 1 && (
            <>
                <IconButton 
                  onClick={handlePrevious}
                  style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
                  >
                  <ChevronLeft />
                </IconButton>
                <IconButton 
                  onClick={handleNext}
                  style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
                  >
                  <ChevronRight />
                </IconButton>
              </>
          )}
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              {data.city}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              {data.date}
            </Typography>
            <Typography variant="body2" component="div">
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {data.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Popover>
    </div>
  );
};

export default MouseHoverPopover;
