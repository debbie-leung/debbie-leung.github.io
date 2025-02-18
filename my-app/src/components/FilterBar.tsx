import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
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
