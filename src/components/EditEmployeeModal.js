import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; // Import from date-fns

function EditEmployeeModal({ employee, onSave, onClose }) {
  const initialWorkDay = employee.workDay && !isNaN(new Date(employee.workDay)) 
  ? new Date(employee.workDay) 
  : new Date();
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [workDay, setWorkDay] = useState(initialWorkDay);

  const [availability, setAvailability] = useState(employee.availability);

  const handleSave = () => {
    const updatedEmployee = {
      ...employee,
      name,
      email,
       // Ensure workDay is a valid date before formatting
       workDay: workDay instanceof Date && !isNaN(workDay) 
       ? format(workDay, "dd MMMM yyyy") 
       : null,
      availability
    };
    onSave(updatedEmployee);
  };

  return (
    <div className="edit">
      <div className="edit-content">
        <h2>Edit Employee</h2>
        <label>
          Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Work Day
          <DatePicker
            selected={workDay}
            onChange={setWorkDay}
            dateFormat="dd MMMM yyyy" // Display format in DatePicker
          />
        </label>
        <label>
          Availability
          <select    value={availability} onChange={(e) => setAvailability(e.target.value)}>
            <option value="Available">Available</option>
            <option value="Non-available">Non-available</option>
          </select>
        </label>
        <div className="button-container">
        <button className="save-button"   onClick={handleSave}>Save</button>
        <button  className='cancel-button'   onClick={onClose}>Cancel</button>
      </div>
      </div>
    </div>
  );
}

export default EditEmployeeModal;
