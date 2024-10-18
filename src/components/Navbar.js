import React,{useState} from 'react'
import AddEmployeeModal from "./AddEmployeeModal"; // Import the modal

import { FaSearch, FaDownload, FaBell } from 'react-icons/fa';


export const Navbar = ({addEmployee}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Open the modal when the button is clicked
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  
  return (
    
          <div className="navbar">
            
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search" className="search-input" />
            </div>
           
           
           
           
          
            <div className='employee'>
          
      <AddEmployeeModal addEmployee={addEmployee} />
</div>


           
              <button className="btn export-csv">
                <FaDownload className="btn-icon" /> Export CSV
              </button>
              <div className="notification-icon">
                <FaBell />
                <span className="notification-count">3</span> {/* Notification Count */}
              </div>
              <img
                src="Oval.jpg"  // Replace with the correct avatar URL
                alt="Profile"
                className="profile-avatar"
              />
            </div>



         
        );
      };
      
  