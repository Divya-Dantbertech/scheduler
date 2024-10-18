import React, { useState, useMemo } from "react";
import  SideBar  from "./components/SideBar";

import AddEmployeeModal from "./components/AddEmployeeModal";


import { Navbar } from "./components/Navbar";
import { SubNavBar } from "./components/SubNavBar";
import EmployeeTable from "./components/EmployeeTable";


function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Lindsey Stroud', email: 'lindsey.stroud@gmail.com', workDay: '16 Sept 2024', availability: 'Available' },
    { id: 2, name: 'Nicci Troiani', email: 'nicci.troiani@gmail.com', workDay: '16 Sept 2024', availability: 'Non-available' },
    { id: 3, name: 'George Fields', email: 'george.fields@gmail.com', workDay: '17 Sept 2024', availability: 'Available', avatar: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Rebecca Moore', email: 'rebecca.moore@gmail.com', workDay: '17 Sept 2024', availability: 'Available', avatar: 'https://via.placeholder.com/40' },
    { id: 5, name: 'Jane Doe', email: 'jane.doe@gmail.com', workDay: '18 Sept 2024', availability: 'Available', avatar: 'https://via.placeholder.com/40' },
    { id: 6, name: 'Jones Dermot', email: 'dermot.jones@gmail.com', workDay: '18 Sept 2024', availability: 'Available', avatar: 'https://via.placeholder.com/40' },
    { id: 7, name: 'Martin Merces', email: 'martin.merces@gmail.com', workDay: '18 Sept 2024', availability: 'Non-available', avatar: 'https://via.placeholder.com/40' },
    { id: 8, name: 'Franz Ferdinand', email: 'franz.ferdinand@gmail.com', workDay: '18 Sept 2024', availability: 'Available', avatar: 'https://via.placeholder.com/40' },
    { id: 9, name: 'John Smith', email: 'john.smith@gmail.com', workDay: '19 Sept 2024', availability: 'Available', avatar: 'https://via.placeholder.com/40' },
    { id: 10, name: 'Judith Williams', email: 'judith.williams@gmail.com', workDay: '19 Sept 2024', availability: 'Available', avatar: 'https://via.placeholder.com/40' },
    
    
    
    
    // Add more employee data here...
  ]);


  const [filterText, setFilterText] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Filter employees based on filterText (name or email)
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(filterText.toLowerCase()) ||
        employee.email.toLowerCase().includes(filterText.toLowerCase())
      );
    });
  }, [employees, filterText]);

  // Sort employees based on sortOrder (ascending or descending)
  const sortedEmployees = useMemo(() => {
    const sorted = [...filteredEmployees].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    return sorted;
  }, [filteredEmployees, sortOrder]);



  // Function to add a new employee
  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1, workDay: 'N/A' }]);
  };

  // Function to edit an employee's information
  const editEmployee = (employeeToEdit) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === employeeToEdit.id ? { ...employeeToEdit } : employee
    );
    setEmployees(updatedEmployees);
    alert(`Editing Employee: ${employeeToEdit.name}`);
  };

  // Function to delete an employee
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    alert(`Deleted Employee with ID: ${id}`);
  };


 
  return (
   
    <div className="app-container">
    
    <Navbar  addEmployee={addEmployee} /> {/* Pass addEmployee to Navbar */}
    <SubNavBar/>
    <div className="main-content">
    <SideBar
      handleFilterChange={setFilterText}
      handleSortChange={setSortOrder}
    
    />
    <div className="table-container">
   
      <EmployeeTable employees={employees} 
       onEdit={editEmployee} 
       onDelete={deleteEmployee} 
       />
       </div>
      </div>
    </div>

  );
}

export default App;
