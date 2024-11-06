import React, { useState } from 'react';
import { FaSortAlphaDown } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

export const SubNavBar = ({ handleFilterChange, handleSortChange }) => {
    const [filter, setFilter] = useState('');
    const [availability, setAvailability] = useState(''); // for availability filtering
    const [sort, setSort] = useState('asc'); // 'asc' or 'desc'
    const [isFilterDropdownVisible, setIsFilterDropdownVisible] = useState(false); // Control dropdown visibility

    // Handle filter input change
    const onFilterChange = (event) => {
        const newFilter = event.target.value; // Get value from input field
        setFilter(newFilter);
        handleFilterChange(newFilter, availability); // Pass the filter text to the parent component
    };

    // Handle availability selection change
    const onAvailabilityChange = (event) => {
        const newAvailability = event.target.value; // Get value from select field
        setAvailability(newAvailability);
        handleFilterChange(filter, newAvailability); // Pass both filter text and availability to parent component
    };

    // Handle sort option change
    const onSortChange = () => {
        const newSort = sort === 'asc' ? 'desc' : 'asc';
        setSort(newSort);
        handleSortChange(newSort); // Pass the sort order to parent component
    };

    // Toggle the dropdown visibility for the filter
    const toggleFilterDropdown = () => {
        setIsFilterDropdownVisible(!isFilterDropdownVisible);
    };

    return (
        <div className="sub-navbar">
            <div className='Navbar'>
                <div className='right-side'>
                    <div className="Boards">
                        {/* Filter Button */}
                        <button onClick={toggleFilterDropdown} className='filter-button' aria-label='Filter options'>
                            <MdFilterList /> Filter
                        </button>

                        {/* Conditionally Render Availability Filter Dropdown */}
                        {isFilterDropdownVisible && (
                            <select
                                value={availability}
                                onChange={onAvailabilityChange}
                                className="availability-filter-dropdown"
                                aria-label="Filter by availability"
                            >
                                <option value="">All Availability</option>
                                <option value="Available">Available</option>
                                <option value="Non-available">Non-available</option>
                            </select>
                        )}

                        {/* Sort Button */}
                        <button onClick={onSortChange} className="sort-button" aria-label="Sort alphabetically">
                            <FaSortAlphaDown /> Sort 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
