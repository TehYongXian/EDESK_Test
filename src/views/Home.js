import React, { useState } from 'react';
import '../css/home.css';
import TreeStructureMenu from '../views/TreeStructureMenu';
import Table from '../views/Table';

import sampleData from '../sampleData.json'; // Adjust the path as per your project structure

function Home() {
  const [selectedData, setSelectedData] = useState([]);

  return (
    <div>
      <h1>Home Tab</h1>
      <div className="container">
        <div className="treeStructureMenu">
          <TreeStructureMenu data={sampleData} setData={setSelectedData} />
        </div>
        <div className="Table">
          <Table data={selectedData} />
        </div>
      </div>
    </div>
  );
}

export default Home;