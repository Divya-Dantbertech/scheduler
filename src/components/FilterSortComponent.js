import React from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const FilterSortComponent = ({ onFilterChange, onSortChange }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" className="filter-sort-container">
      {/* Filter Button */}
      <Button startIcon={<FilterListIcon />} variant="text" onClick={onFilterChange}>
        Filter
      </Button>
      
      {/* Sort Button */}
      <Box className="sort-button-box">
        <SortByAlphaIcon className="sort-icon" />
        <Button variant="text" className="sort-button" onClick={onSortChange}>
        <span className="sort-button-text">Sort</span> {/* Applying CSS to text */}
        </Button>
      </Box>
    </Stack>
  );
};

export default FilterSortComponent;
