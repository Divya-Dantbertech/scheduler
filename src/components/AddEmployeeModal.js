import React, { useState } from 'react';
import {
  Modal,
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { v4 as uuidv4 } from 'uuid';
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; // Import from date-fns


const AddEmployeeModal = ({ addEmployee }) => {
  const initialWorkDay = new Date(); // Default to current date
  const [open, setOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    availability: '',
    workDay: format(initialWorkDay, 'dd MMMM yyyy'),
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [workDay, setWorkDay] = useState(initialWorkDay);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewEmployee({
      name: '',
      email: '',
      availability: '',
      workDay: format(new Date(), 'dd MMMM yyyy'),
    });
    setSelectedDate(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    setNewEmployee((prev) => ({
      ...prev,
      workDay: newValue ? format(newValue, "dd MMMM yyyy") : '', // Format the date properly
    }));
  };

  const handleAddEmployee = () => {
    const newEmployeeWithID = { ...newEmployee, id: uuidv4() };
    addEmployee(newEmployeeWithID);
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen} className="add-employee-button">
        <span className="icon">
          <i className="fas fa-user-plus"></i>
        </span>
        <span className="text">Add Employee</span>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-container">
          <Box className="modal-header">
            <Typography variant="h6">Add Employee</Typography>
          </Box>
          <Box className="modal-body">
            <label>Full Name</label>
            <TextField
              fullWidth
              margin="normal"
              name="name"
              value={newEmployee.name}
              onChange={handleFormChange}
              placeholder="Enter your full name"
              className="input-field"
            />
            <label>Email Address</label>
            <TextField
              fullWidth
              margin="normal"
              name="email"
              value={newEmployee.email}
              onChange={handleFormChange}
              placeholder="Enter your email address"
              className="input-field"
            />
            <label>Availability</label>
            <FormControl fullWidth margin="normal" className="select-field">
              <Select
                name="availability"
                value={newEmployee.availability}
                onChange={handleFormChange}
              >
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="Non-available">Non-available</MenuItem>
              </Select>
            </FormControl>
            <label>Workday</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={workDay}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
            <Box className="button-container">
              <Button onClick={handleClose} variant="outlined" className="cancel-button">
                Cancel
              </Button>
              <Button onClick={handleAddEmployee} variant="contained" className="add-button">
                Add Employee
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddEmployeeModal;
