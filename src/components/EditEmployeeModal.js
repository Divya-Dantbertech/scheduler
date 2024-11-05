import React, { useState } from 'react';

function EditEmployeeModal({ employee, onSave, onClose }) {
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [workDay, setWorkDay] = useState(employee.workDay);
  const [availability, setAvailability] = useState(employee.availability);

  const handleSave = () => {
    const updatedEmployee = {
      ...employee,
      name,
      email,
      workDay,
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
          <input type="text" value={workDay} onChange={(e) => setWorkDay(e.target.value)} />
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
