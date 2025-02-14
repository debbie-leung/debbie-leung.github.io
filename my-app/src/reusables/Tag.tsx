import * as React from 'react';
import Chip from '@mui/material/Chip';
import { ChipProps } from '@mui/material/Chip';

// Update the Chip's color options to include custom colors
declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        tool: true,
        technology: true,
        topic: true,
    }
}

interface TagProps {
    name: string;
    color: ChipProps['color'];
}

export default function Tag({ name, color }: TagProps) {
    return (
        <Chip 
        label={name}
        color={color}
        />
    );
}
