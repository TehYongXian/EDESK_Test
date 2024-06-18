import React, { useState } from 'react';
import '../css/treeStructureMenu.css';

const TreeStructureMenu = ({ data, setData }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (item) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(item)
        ? prevOpenItems.filter((i) => i !== item)
        : [...prevOpenItems, item]
    );
  };

  const handleItemClick = (state, city) => {
    setData(data[state][city].companies);
  };

  const TreeItem = ({ label, children }) => (
    <li>
      <span onClick={() => toggleItem(label)} className="tree-item">
        {openItems.includes(label) ? '[ - ] ' : '[ + ] '}
        {label}
      </span>
      {openItems.includes(label) && <ul>{children}</ul>}
    </li>
  );

  return (
    <div className="tree-structure-menu">
      <ul>
        {Object.keys(data).map((state) => (
          <TreeItem key={state} label={state}>
            {Object.keys(data[state]).map((city) => (
              <li key={city} onClick={() => handleItemClick(state, city)} className="city-item">
                {city}
              </li>
            ))}
          </TreeItem>
        ))}
      </ul>
    </div>
  );
};

export default TreeStructureMenu;
