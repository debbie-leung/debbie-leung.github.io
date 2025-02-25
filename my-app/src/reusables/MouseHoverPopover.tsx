import React, { useRef, useState } from 'react';
import { Card, CardContent, CardMedia, IconButton, Popover, Typography, styled } from '@mui/material';
import { Hotspot } from '../components/InteractiveMap';
import ReactCountryFlag from 'react-country-flag';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import { MediaType } from '../enums/MediaType';

const PopoverStyled = styled(Popover)({
  pointerEvents: 'none',
  '& .MuiPopover-paper': {
    pointerEvents: 'auto',
  }
});

interface MouseHoverPopoverProps {
  data: Hotspot;
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
}

const MouseHoverPopover = ({ data, children }: MouseHoverPopoverProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef<HTMLElement | null>(null);

  const popoverEnter = (event: React.MouseEvent<HTMLElement>) => {
    setOpenedPopover(true);
  };

  const popoverLeave = (event: React.MouseEvent<HTMLElement>) => {
    setOpenedPopover(false);
    // Set 200ms delay timeout to allow popover to close before resetting the index
    setTimeout(() => {
      setCurrentImageIndex(0);
    }, 200);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % data.media.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + data.media.length) % data.media.length);
  };

  return (
    <div>
      {React.cloneElement(children, {
        onMouseEnter: popoverEnter,
        onMouseLeave: popoverLeave,
        ref: popoverAnchor
      } as React.HTMLAttributes<HTMLElement>)}
      <PopoverStyled
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{onMouseEnter: popoverEnter, onMouseLeave: popoverLeave}}
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
      </PopoverStyled>
    </div>
  );
};

export default MouseHoverPopover;
