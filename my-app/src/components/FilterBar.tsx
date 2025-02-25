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
        '.MuiAutocomplete-tag': { 
          maxWidth: { xs: '8rem', sm: '10rem', md: '6rem' }
        },
      }}
      renderTags={(tagValue, getTagProps) => {
        const numTags = tagValue.length;
        const limitTags = 2;

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
      // renderTags={(tagValue, getTagProps) =>
      //   tagValue.map((option, index) => {
      //     const tagProps = getTagProps({ index });
      //     return (
      //       <Chip
      //         key={tagProps.key}
      //         label={option.name}
      //         color={tagCategoryColors[option.category].chipColor}
      //         {...tagProps}
      //         size="small"
      //       />
      //     );
      //   })
      // }
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
