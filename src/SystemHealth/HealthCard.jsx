import React from "react";
import ProgressBar from "./ProgressBar";

const HealthCard = ({ title, value }) => {
  return (
    <div className="health-card">
      <h3>{title}</h3>
      <ProgressBar value={value} />
      <p>{value}%</p>
    </div>
  );
};

export default HealthCard;
