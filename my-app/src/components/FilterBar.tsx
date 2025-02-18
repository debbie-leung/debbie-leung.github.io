import React from 'react';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { TagProps } from '../reusables/Tag';

interface FilterBarProps {
  options: TagProps[];
  value: TagProps[];
  onChange: (newValue: TagProps[]) => void;
}

const FilterBar = ({ options, value, onChange }: FilterBarProps) => {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={options}
      getOptionLabel={(option) => option?.name}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      groupBy={(option) => option.color}
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
