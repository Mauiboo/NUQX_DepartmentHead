import React, { useState } from "react";
import "./ServiceForm.css";

const ServiceForm = () => {
  const [description, setDescription] = useState("");
  const [serviceName, setServiceName] = useState(""); 
  const maxChars = 250;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Service Submitted:\nName: ${serviceName}\nDescription: ${description}`);
  };

  const handleClear = () => {
    setServiceName("");
    setDescription("");
  };

  return (
    <div className="service-form">
      <h2 className="form-title">Service Details</h2>
      
      <label className="form-label" htmlFor="service-name">Service Name*</label>
      <input 
        type="text" 
        id="service-name" 
        className="form-input" 
        placeholder="Enter service name"
        value={serviceName} 
        onChange={(e) => setServiceName(e.target.value)} 
      />

      <label className="form-label" htmlFor="service-description">Service Description Steps</label>
      <textarea
        id="service-description"
        className="form-textarea"
        placeholder="Enter service description steps..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={maxChars}
      />
      <div className="char-counter">{description.length}/{maxChars}</div>

      {/* Button Group */}
      <div className="button-group">
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        <button className="clear-btn" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default ServiceForm;
