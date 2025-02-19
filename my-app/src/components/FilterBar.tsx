import React from 'react';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { tagCategoryColors, TagProps } from '../reusables/Tag';
import { TagCategory } from '../enums/TagCategory';
import { TravelType } from '../enums/TravelType';

export interface FilterBarOption extends TagProps {
  category: TagCategory | TravelType;
}

interface FilterBarProps {
  tabValue: string;
  options: FilterBarOption[];
  value: FilterBarOption[];
  onChange: (newValue: FilterBarOption[]) => void;
}

const FilterBar = ({ tabValue, options, value, onChange }: FilterBarProps) => {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={options}
      getOptionLabel={(option) => option?.name}
      value={value}
      onChange={(event, newValue) => onChange(newValue as FilterBarOption[])}
      groupBy={parseInt(tabValue) > 1 ? (option) => option.category : undefined}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => {
          const tagProps = getTagProps({ index });
          return (
            <Chip
              key={tagProps.key}
              label={option.name}
              color={option.color}
              {...tagProps}
            />
          );
        })
      }
      renderOption={(props, option) => {
        const { key, ...restProps } = props; 
        return (
          <li key={key} {...restProps}>
            <Chip label={option.name} color={option.color} /> 
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
        />
      )}
    />
  );
};

export default FilterBar;
