
import React,{useState,useEffect} from 'react'
import AddEmployeeModal from "./AddEmployeeModal"; // Import the modal
import SideBar from "./SideBar";
import { FaSearch, FaDownload, FaBell,FaBars } from 'react-icons/fa';
import Papa from "papaparse";

import { saveAs } from "file-saver";


export const Navbar = ({addEmployee, dataToExport =[ ],searchTerm, onSearchChange,  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); // Use state if dynamic
 
  const [filteredResults, setFilteredResults] = useState(dataToExport); // State for filtered results
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

// Detect screen width changes and set sidebar state
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 769) {
      setIsSidebarOpen(true); // Show sidebar on desktop
    } else {
      setIsSidebarOpen(false); // Hide sidebar on mobile by default
    }
  };
  window.addEventListener("resize", handleResize);
  handleResize(); // Initialize on mount

  return () => window.removeEventListener("resize", handleResize);
}, []);

 const toggleSidebar = () => {
  if (window.innerWidth <= 768) { // Only toggle on mobile screens
    setIsSidebarOpen(!isSidebarOpen);
  }
};


  // Open the modal when the button is clicked
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  
  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
 
  const handleExportCSV = () => {
    try {
      // Convert JSON data to CSV format
      const csvData = Papa.unparse(dataToExport);
  
      // Create a Blob object for CSV data
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
  
      // Trigger file download
      saveAs(blob, "EmployeeData.csv");
    } catch (error) {
      console.error("Error exporting CSV: ", error);
    }
  };
  
 // Handle search input change
 const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase(); // Get the search term
  onSearchChange(searchTerm); // Pass search term to App.js

  // Filter data based on employee name
  const results = dataToExport.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm)
  );
  setFilteredResults(results);
  
  

};
 
  return (
    
          <div className="navbar">
           
           <div className="menu-icon" onClick={toggleSidebar} togglesidebar={toggleSidebar}>
        <FaBars />
    
      
      {isSidebarOpen && window.innerWidth <= 768 && (
           <div className="sidebar-overlay open" onClick={toggleSidebar}>
          <div className="sideBar open"
         
          onClick={(e) => e.stopPropagation()}>
         
         <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
         
       </div>
       </div>
      )}
   {/* Sidebar for desktop (always visible) */}
   {window.innerWidth > 768 && (
        <div className="sideBar open">
          <SideBar />
        </div>
      )}

  </div> 
  <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={handleSearch} // Call handleSearch on input change
          list='employee-suggestion'
        />
      {/* Define datalist for in-input search suggestions */}
      <datalist id="employee-suggestions">
          {filteredResults.map((employee, index) => (
            <option key={index} value={employee.name} />
          ))}
        </datalist>
          </div>
        
      

           
           
           <div className='right-sides'>
           
        
            <div className='employee'>
          
      <AddEmployeeModal addEmployee={addEmployee} />
</div>


           
              <button className="btn export-csv"  onClick={handleExportCSV}>
                <FaDownload className="btn-icon" /> Export CSV
              </button>
              <div className="notification-icon">
                <FaBell />
                <span className="notification-count">{notificationCount}</span> {/* Notification Count */}
              </div>
              <img
                src="Oval.jpg"  // Replace with the correct avatar URL
                alt="Profile"
                className="profile-avatar"
              />
            </div>
          
           </div> 


         
        );
      };
      
  