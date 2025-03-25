import React from 'react';
import './Dropdown.css';

const Dropdown = () => {
  return (
    <select className="dropdown">
      <option>Today</option>
      <option>Week</option>
      <option>Month</option>
      <option>Term</option>
      <option>Year</option>
    </select>
  );
};

export default Dropdown;
