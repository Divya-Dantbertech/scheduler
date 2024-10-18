import React, { useState } from 'react';

import { TableRow, TableCell, Checkbox, IconButton,Avatar,TextField, Button } from '@mui/material';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit,FaSave, FaTimes } from "react-icons/fa";


const EmployeeRow = ({ employee , onEdit, onDelete}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: employee.name,
    email: employee.email,
    workDay: employee.workDay,
    availability: employee.availability,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(employee.id, editData); // Pass the updated data back to the parent component
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditData({
      name: employee.name,
      email: employee.email,
      workDay: employee.workDay,
      availability: employee.availability,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <TableRow className="employee-row">
    <TableCell className="employee-checkbox-cell" padding="checkbox">
      <Checkbox />
    </TableCell>
    <TableCell className="employee-cell">
        {/* Wrap Avatar and name in a flex container */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar 
            src="image.png" 
            alt={editData.name} 
            style={{ width: 24, height: 24, marginRight: 8 }} 
          />
           {isEditing ? (
            <TextField 
              name="name"
              value={editData.name}
              onChange={handleChange}
              size="small"
          />
          ) : (
          <span>{employee.name}</span>
          )}
        </div>
       
      </TableCell>
    {/* <TableCell className="employee-cell">  <Avatar src={employee.avatarUrl} alt={employee.name} style={{ width: 24, height: 24,marginRight: 8 }} />{employee.name}</TableCell> */}
    <TableCell className="employee-cell">{employee.email}</TableCell>
    <TableCell className="employee-cell">{employee.workDay}</TableCell>
    <TableCell className="employee-cell">{employee.availability}</TableCell>
    <TableCell className="employee-cell">
    <IconButton onClick={() => onEdit(employee)} className="action-icon" style={{ padding: 0, color: '#757575', marginRight: '20px' }}>
    
    <FaRegEdit style={{ fontSize: '20px'  }} /> {/* Smaller pencil icon */} 
       
        </IconButton>
        <IconButton onClick={() => onDelete(employee.id)}  className="action-icon delete-icon"  style={{ padding: 0, color: '#757575', }}>
       
          <RiDeleteBin6Line  style={{ fontSize: '20px' }} /> {/* Smaller trash bin icon */}
         
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default EmployeeRow;
