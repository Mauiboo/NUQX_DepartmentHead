import React from "react";
import "./TransactionModal.css"; 

const TransactionModal = ({ transaction, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button with X Icon */}
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <h2>Transaction Details</h2>
        <p><strong>Admin Name:</strong> {transaction.admin}</p>
        <p><strong>Department:</strong> {transaction.department}</p>
        <p><strong>Ticket Number:</strong> {transaction.ticket}</p>
        <p><strong>Date:</strong> {transaction.date}</p>
        <p><strong>Time:</strong> {transaction.time}</p>
      </div>
    </div>
  );
};

export default TransactionModal;
