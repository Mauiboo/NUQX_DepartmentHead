import React from 'react';
import './Dropdown.css';

const Dropdown = () => {
  return (
    <select className="bg-blue-800 text-white p-2 rounded">
      <option>Admission</option>
      <option>Enrollment</option>
      <option>Accounting</option>
    </select>
  );
};

export default Dropdown;
