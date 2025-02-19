import React from 'react';
import { Card, CardContent, Popover, Typography } from '@mui/material';

interface MouseHoverPopoverProps {
  content: string;
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
}

const MouseHoverPopover = ({ content, children }: MouseHoverPopoverProps) => {
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
        <Card sx={{ width: 300 }} elevation={0}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              {content}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </Popover>
    </div>
  );
};

export default MouseHoverPopover;
