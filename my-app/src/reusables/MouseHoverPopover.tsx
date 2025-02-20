import React from 'react';
import { Card, CardContent, CardMedia, Popover, Typography } from '@mui/material';
import { Hotspot } from '../components/InteractiveMap';
import wallE from '../media/wall-e.gif';

interface MouseHoverPopoverProps {
  data: Hotspot;
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
}

const MouseHoverPopover = ({ data, children }: MouseHoverPopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ height: 140 }}
            image={wallE}
            title="green iguana"
          />
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
