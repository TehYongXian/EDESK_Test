import React from 'react';
import '../css/home.css';
import TreeStructureMenu from './TreeStructureMenu';
import Table from './Table';

function Home() {
  return (
    <div>
      <h1>Home Tab.</h1>
      <div className="container">
        <div className="treeStructureMenu">
          <TreeStructureMenu/>
        </div>
        <div className="Table">
          <Table/>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
