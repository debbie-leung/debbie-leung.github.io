import React from 'react';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { tagCategoryColors, TagProps } from '../reusables/Tag';
import { FilterList } from '@mui/icons-material';

interface FilterBarProps {
  tabValue: string;
  options: TagProps[];
  value: TagProps[];
  onChange: (newValue: TagProps[]) => void;
}

const FilterBar = ({ tabValue, options, value, onChange }: FilterBarProps) => {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={options}
      getOptionLabel={(option) => option?.name}
      value={value}
      onChange={(event, newValue) => onChange(newValue as TagProps[])}
      groupBy={parseInt(tabValue) > 1 ? (option) => option.category : undefined}
      popupIcon={<FilterList />}
      sx={{ 
        '.MuiAutocomplete-inputRoot': {
          flexWrap: 'nowrap !important'
        },
      }}
      renderTags={(tagValue, getTagProps) => {
        const numTags = tagValue.length;
        const containerWidth = document.querySelector('.MuiAutocomplete-root')?.clientWidth || 0;
        const availableWidth = containerWidth - 110; // Account for input field and padding
        
        // Calculate total width of all chips
        let totalChipsWidth = 0;
        let limitTags = 0;
        
        // Create a temporary container to measure chip widths
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'absolute';
        tempContainer.style.visibility = 'hidden';
        document.body.appendChild(tempContainer);

        // Measure each chip's width
        for (let i = 0; i < numTags; i++) {
          const chip = document.createElement('div');
          chip.style.display = 'inline-block';
          chip.textContent = tagValue[i].name;
          tempContainer.appendChild(chip);
          
          const chipWidth = chip.offsetWidth + 20; // Add margin/padding
          
          totalChipsWidth += chipWidth;
          if (totalChipsWidth < availableWidth) {
            limitTags++;
          } else {
            break;
          }
        }

        // Clean up temporary container
        document.body.removeChild(tempContainer);

        return (
          <>
            {value.slice(0, limitTags).map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option.name}
                color={tagCategoryColors[option.category].chipColor}
                size="small"
              />
            ))}
            {numTags > limitTags && ` +${numTags - limitTags}`}
          </>
        );
      }}
      renderOption={(props, option) => {
        const { key, ...restProps } = props; 
        return (
          <li key={key} {...restProps}>
            <Chip 
              label={option.name} 
              color={tagCategoryColors[option.category].chipColor} 
              size="small" 
            /> 
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          size="small"
        />
      )}
    />
  );
};

export default FilterBar;
