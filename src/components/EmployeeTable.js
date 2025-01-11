import React, { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  TablePagination,
} from '@mui/material';

import EmployeeRow from './EmployeeRow';

const EmployeeTable = ({ employees, onEdit, onDelete, clearSearchTerm }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  // Handle pagination change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper
      className="paper-container"
      sx={{
        padding: '0px',
        width: '95%',
        marginLeft: '0', // Adjust for proper alignment
        transition: 'margin-left 0.3s ease',
        margin: '30px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        textAlign: 'center',
        '&:hover': {
          boxShadow: '0px 6px 15px 0px #0000001A',
        },
      }}
    >
    
      {/* Table Container */}
      <TableContainer className="table-container">
        <Table stickyHeader>
          <TableHead>
            <TableRow className="custom-table-header">
              <TableCell padding="checkbox" className="table-header-cell">
                <Checkbox />
              </TableCell>
              <TableCell className="table-header-cell">Name</TableCell>
              <TableCell className="table-header-cell">Email</TableCell>
              <TableCell className="table-header-cell">WorkDay</TableCell>
              <TableCell className="table-header-cell">Availability</TableCell>
              <TableCell className="table-header-cell">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render Employee Rows */}
            {employees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((employee) => (
                <EmployeeRow
                  key={employee.id}
                  employee={employee}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
          </TableBody>
        </Table>

        {/* Table Pagination */}
        <TablePagination
          rowsPerPageOptions={[8, 16, 24]}
          component="div"
          count={employees.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count}`}
          className="custom-pagination"
        />
      </TableContainer>
    </Paper>
  );
};

export default EmployeeTable;
