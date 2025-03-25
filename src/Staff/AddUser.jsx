import React from "react";
import profileImg from "../images/user.png"; 
import "./AddUser.css"; 

const AddUser = ({ onClose }) => {
  return (
    <div className="modal-content">
      <span className="close-button" onClick={onClose}>&times;</span>

      <img src={profileImg} alt="Profile" className="modal-avatar-img" />

      <div className="form-container">
        <div className="column">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter first name" />
          </div>
          <div className="form-group">
            <label>Middle Name</label>
            <input type="text" placeholder="Enter middle name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter last name" />
          </div>
        </div>

        <div className="column credentials-column">
          <div className="form-group email-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Default Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
          </div>
        </div>
      </div>

      <div className="button-group">
        <button className="submit-button">Submit</button>
        <button className="clear-button">Clear</button>
      </div>
    </div>
  );
};

export default AddUser;
