import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/table.css';

const Table = ({ data }) => {
  const itemsPerPage = 5; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleAction = (action, item) => {
    // Handle the action (view, edit, delete) for the item
    console.log(`${action} action on`, item);
  };

  const visibleDataCount = currentItems.length;
  const totalDataCount = data.length;


  useEffect(() => {
    const calculatePageNumbers = () => {
      const pageNeighbours = 2; // Number of page numbers to display before and after current page

      let startPage = Math.max(1, currentPage - pageNeighbours);
      let endPage = Math.min(totalPages, currentPage + pageNeighbours);

      const pages = [...Array(endPage - startPage + 1).keys()].map((i) => startPage + i);

      setPageNumbers(pages);
    };

    calculatePageNumbers();
  }, [currentPage, totalPages]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='table_container'>
      <h3>Customer Details</h3>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Postcode</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={item.id}>
              <td>{indexOfFirstItem + index + 1}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.city}</td>
              <td>{item.postcode}</td>
              <td>{item.country}</td>
              <td>
                <Link to={`/view/${item.id}`}>
                  <button className="tableViewBtn">View</button>
                </Link>
                {/* <button className='tableViewBtn' onClick={() => handleAction('view', item)}>View</button> */}
                <button className='tableEditBtn' onClick={() => handleAction('edit', item)}>Edit</button>
                <button className='tableDeleteBtn' onClick={() => handleAction('delete', item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className='pagination-container'>
        <div >
          <p>Showing {visibleDataCount} out of {totalDataCount} data</p>
        </div>
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1} className='pagination-button'>
          《
          </button>
          {pageNumbers.map((pageNumber) => (
            <button
            key={pageNumber}
            className={`pagination-button ${pageNumber === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className='pagination-button'>
            》
          </button>
        </div>
        
        
      </div>
    </div>
  );
};

export default Table;
