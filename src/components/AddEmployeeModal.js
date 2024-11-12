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
import '@fortawesome/fontawesome-free/css/all.min.css';
import { v4 as uuidv4 } from 'uuid';

const AddEmployeeModal = ({ addEmployee }) => {
  const [open, setOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    availability: '',
    workday: '',
  });
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewEmployee({
      name: '',
      email: '',
      availability: '',
      workday: '',
    });
    setSelectedDate(null); // Clear date when closing
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
      workday: newValue ? newValue.toLocaleDateString() : '', // Format date to string
    }));
  };

  const handleAvailabilityChange = (e) => {
    const { value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      availability: value,
    }));
  };

  const handleAddEmployee = () => {
    const newEmployeeWithID = { ...newEmployee, id: uuidv4() };
    addEmployee(newEmployeeWithID);
    handleClose(); // Close modal and reset form
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
            <label>Non availability</label>
            <FormControl fullWidth margin="normal" className="select-field">
              <Select
                name="availability"
                value={newEmployee.availability}
                onChange={handleAvailabilityChange}
              >
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="Non-available">Non-available</MenuItem>
              </Select>
            </FormControl>

            <label>Workday</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select workday"
                    fullWidth
                    margin="normal"
                    className="date-picker-field"
                  />
                )}
              />
            </LocalizationProvider>

            {/* Display selected date in the form */}
            {selectedDate && (
              <Typography variant="body2" className="selected-date">
                Selected Workday: {selectedDate.toLocaleDateString()}
              </Typography>
            )}

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
