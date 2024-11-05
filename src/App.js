import React, { useState,useMemo, useEffect } from "react";
import  SideBar  from "./components/SideBar";
import { Navbar } from "./components/Navbar";
import { SubNavBar } from "./components/SubNavBar";
import EmployeeTable from "./components/EmployeeTable";
import EditEmployeeModal from "./components/EditEmployeeModal";
function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [
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
    
    
    ];
    
    // Add more employee data here...
});

  
  const [searchTerm, setsearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
    // Save to localStorage whenever employees change
    useEffect(() => {
      localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);
  

// Define filtered and sorted employees
const filteredEmployees = useMemo(() => {
  let filtered = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort filtered employees
  return filtered.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
}, [employees, searchTerm, sortOrder]);



 // Function to add a new employee
 const addEmployee = (newEmployee) => {
  setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
};


  

  const handleFilterChange = (filterValue) => {
    console.log("Filter value:", filterValue); // Implement filter logic here
  };
  
 // Update handleSortChange to toggle sortOrder
 const handleSortChange = () => {
  const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  setSortOrder(newSortOrder); // Update sort order in state
};

  
  
  
  
   // Open edit modal and set the employee to be edited
   const handleEditClick = (employee) => {
    setEmployeeToEdit(employee);
    setEditModalOpen(true);
  };
  // Update the employee in the list
  const updateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setEditModalOpen(false); // Close modal after saving changes
  };



  // Function to delete an employee
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    alert(`Deleted Employee with ID: ${id}`);
  };


 
  return (
   
    <div className="app-container">
    
    <Navbar  addEmployee={addEmployee}  dataToExport={employees}  searchTerm={searchTerm}   onSearchChange={setsearchTerm}   filteredResults={filteredEmployees}/> {/* Pass addEmployee to Navbar */}
    <SubNavBar handleFilterChange={handleFilterChange} handleSortChange={handleSortChange}/>
    <div className="main-content">
    <SideBar
      handleFilterChange={setsearchTerm}
      handleSortChange={setSortOrder}
    
    />
    <div className="table-container">
   
      <EmployeeTable employees={filteredEmployees} 
       onEdit={handleEditClick} 
       onDelete={deleteEmployee} 
       />
       </div>
      </div>
  {/* Edit Employee Modal */}
  {editModalOpen && employeeToEdit && (
        <EditEmployeeModal
          employee={employeeToEdit}
          onSave={updateEmployee}
          onClose={() => setEditModalOpen(false)}
        />
      )}


    </div>

  );
}

export default App;
