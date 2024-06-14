import React from 'react';
import '../css/table.css';

const Table = () => {
  // Sample data for the table
  const data = [
    { id: 1, name: 'John Doe', address: '123 Main St', city: 'New York', pinCode: '10001', country: 'USA' },
    { id: 2, name: 'Jane Smith', address: '456 Elm St', city: 'Los Angeles', pinCode: '90001', country: 'USA' },
    
  ];

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Pin Code</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.address}</td>
            <td>{row.city}</td>
            <td>{row.pinCode}</td>
            <td>{row.country}</td>
            <td>
              <button className="action-button view-button">View</button>
              <button className="action-button edit-button">Edit</button>
              <button className="action-button delete-button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
