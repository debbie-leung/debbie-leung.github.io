import * as React from 'react';
import Chip, { ChipProps } from '@mui/material/Chip';
import { Color } from '../enums/Color';
import { TagCategory } from '../enums/TagCategory';
import { TravelType } from '../enums/TravelType';

// Update the Chip's color options to include custom colors
declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        [Color.Red]: true,
        [Color.Blue]: true,
        [Color.Green]: true,
        [Color.Purple]: true,
        [Color.Yellow]: true,
    }
}

export const tagCategoryColors: Record<TagCategory | TravelType, ChipProps['color']> = {
    [TagCategory.Tool]: Color.Red, 
    [TagCategory.Technology]: Color.Blue, 
    [TagCategory.Topic]: Color.Green,
    [TravelType.Study]: Color.Purple,
    [TravelType.Extracurricular]: Color.Green,
    [TravelType.Work]: Color.Red,
    [TravelType.FunTrip]: Color.Yellow,
    [TravelType.Diving]: Color.Blue,
};

export interface TagProps {
    name: string;
    category: TagCategory | TravelType;
}

export default function Tag({ name, category }: TagProps) {
    return (
        <Chip 
            label={name}
            color={tagCategoryColors[category]}
        />
    );
}
