import React from 'react';
import { useParams } from 'react-router-dom';
import sampleData from '../sampleData.json';
import '../css/tableView.css';

const findCompanyById = (id) => {
  for (const state in sampleData) {
    for (const city in sampleData[state]) {
      const company = sampleData[state][city].companies.find((company) => company.id === parseInt(id, 10));
      if (company) {
        return company;
      }
    }
  }
  return null;
};

const TableView = () => {
  const { id } = useParams();
  const company = findCompanyById(id);

  if (!company) {
    return <p>Company not found.</p>;
  }

  return (
    <div className="table-view">
      <h2>Detail View</h2>
      <p><strong>Name:</strong> {company.name}</p>
      <p><strong>Address:</strong> {company.address}</p>
      <p><strong>City:</strong> {company.city}</p>
      <p><strong>Postcode:</strong> {company.postcode}</p>
      <p><strong>Country:</strong> {company.country}</p>
    </div>
  );
};

export default TableView;
