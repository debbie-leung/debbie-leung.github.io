import * as React from 'react';
import Chip, { ChipProps } from '@mui/material/Chip';
import { Color } from '../enums/Color';
import { TagCategory } from '../enums/TagCategory';

// Update the Chip's color options to include custom colors
declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        [Color.Red]: true,
        [Color.Blue]: true,
        [Color.Green]: true,
    }
}

export const tagCategoryColors: Record<TagCategory, ChipProps['color']> = {
    [TagCategory.Tool]: Color.Red, 
    [TagCategory.Technology]: Color.Blue, 
    [TagCategory.Topic]: Color.Green,
};

export interface TagProps {
    name: string;
    category: TagCategory;
}

export default function Tag({ name, category }: TagProps) {
    return (
        <Chip 
            label={name}
            color={tagCategoryColors[category]}
        />
    );
}
