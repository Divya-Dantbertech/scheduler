import React, { useState } from 'react';
import {
  Modal,
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { format } from 'date-fns';




const AddEmployeeModal = ({ addEmployee }) => {
  const [open, setOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    availability: [],
    workday: null,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvailabilityChange = (e) => {
    const { value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      availability: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handleAddEmployee = () => {
    addEmployee(newEmployee);
    setNewEmployee({ name: '', email: '', availability: [], workday: null });
    handleClose();
  };

  const formattedWorkday = newEmployee.workday 
  ? format(newEmployee.workday, 'MM/dd/yyyy') 
  : 'N/A';

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
            <TextField
              fullWidth
              margin="normal"
              label="Full Name"
              name="name"
              value={newEmployee.name}
              onChange={handleFormChange}
              placeholder="Enter your full name"
               className="input-field"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email Address"
              name="email"
              value={newEmployee.email}
              onChange={handleFormChange}
              placeholder="Enter your email address"
                className="input-field"
            />
            <FormControl fullWidth margin="normal"  className="select-field">
              <InputLabel>Availability</InputLabel>
              <Select
                multiple
                name="availability"
                value={newEmployee.availability}
                onChange={handleAvailabilityChange}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="Non-available">Non-available</MenuItem>
              </Select>
            </FormControl>
        
          
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                 label="Workday"
                  value={newEmployee.workday}
                  onChange={(newValue) => { 
                    if (newValue) {
                      setNewEmployee((prev) => ({ ...prev, workday: newValue }));
                    }}
                  }
                      renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
              <Box className="button-container">
            
              <Button onClick={handleClose} variant="outlined" className="cancel-button">
                Cancel
              </Button>
              <Button onClick={handleAddEmployee} variant="contained"  className="add-button">
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
