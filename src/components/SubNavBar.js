import React, { useState } from 'react';
import { FaSortAlphaDown } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

  export const SubNavBar = ({ handleFilterChange, handleSortChange }) => {
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('asc'); // 'asc' or 'desc'

   // Handle filter input change
   const onFilterChange = () => {
    // Here you might have a prompt or an input dialog for the filter
    const newFilter = prompt('Enter filter text:');
    if (newFilter !== null);
    setFilter(newFilter);
    handleFilterChange(newFilter); // Pass the value to parent component
  };

  // Handle sort option change
  const onSortChange = () => {
    // Toggle between 'asc' and 'desc'
    const newSort = sort === 'asc' ? 'desc' : 'asc';
    setSort(newSort);
    handleSortChange(newSort); // Pass the value to parent component
  };

  return (
    <div className="sub-navbar">
        <div  className='Navbar'>
            <div className='right-side'>
      <div className="Boards">
     
     <button onClick={onFilterChange} className='filter-button' aria-label='Filter alphabetically'>
     <MdFilterList /> Filter
     </button>
      
      {/* Sort Button */}
      <button onClick={onSortChange} className="sort-button" aria-label="Sort alphabetically">
        <FaSortAlphaDown />  Sort
      </button>
    </div>
   
 
       
       </div>
        </div>
       </div>
      
   
  );
};
