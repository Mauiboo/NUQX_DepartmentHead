import React from "react";

const ProgressBar = ({ value }) => {
  const getColor = (value) => {
    if (value < 50) return "#4caf50"; // Green
    if (value < 80) return "#ff9800"; // Orange
    return "#f44336"; // Red
  };

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${value}%`, backgroundColor: getColor(value) }}
      ></div>
    </div>
  );
};

export default ProgressBar;
