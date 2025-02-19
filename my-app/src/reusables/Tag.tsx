import * as React from 'react';
import Chip, { ChipProps } from '@mui/material/Chip';
import { Color, ColorWithOpacity } from '../enums/Color';
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

export const tagCategoryColors: Record<TagCategory | TravelType, { chipColor: ChipProps['color'], bgColor: string }> = {
    [TagCategory.Tool]: { chipColor: Color.Red, bgColor: ColorWithOpacity.Red },
    [TagCategory.Technology]: { chipColor: Color.Blue, bgColor: ColorWithOpacity.Blue },
    [TagCategory.Topic]: { chipColor: Color.Green, bgColor: ColorWithOpacity.Green },
    [TravelType.Study]: { chipColor: Color.Purple, bgColor: ColorWithOpacity.Purple },
    [TravelType.Extracurricular]: { chipColor: Color.Green, bgColor: ColorWithOpacity.Green },
    [TravelType.Work]: { chipColor: Color.Red, bgColor: ColorWithOpacity.Red },
    [TravelType.FunTrip]: { chipColor: Color.Yellow, bgColor: ColorWithOpacity.Yellow },
    [TravelType.Diving]: { chipColor: Color.Blue, bgColor: ColorWithOpacity.Blue },
};

export interface TagProps {
    name: string;
    category: TagCategory | TravelType;
}

export default function Tag({ name, category }: TagProps) {
    return (
        <Chip 
            label={name}
            color={tagCategoryColors[category].chipColor}
        />
    );
}
