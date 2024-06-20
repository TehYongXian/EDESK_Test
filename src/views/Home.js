import React, { useState } from 'react';
import '../css/home.css';
import TreeStructureMenu from '../views/TreeStructureMenu';
import Table from '../views/Table';

import sampleData from '../sampleData.json';

function Home() {
  const [selectedData, setSelectedData] = useState([]);

  return (
    <div className='homeContainer'>
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