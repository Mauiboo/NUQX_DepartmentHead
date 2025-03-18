import React from "react";
import "./SystemHealth.css";
import { CheckCircle, MinusCircle } from "lucide-react";

const monitors = [
  { id: 3, status: "Online", timeService: "No issues", software: "No issues", storage: "No issues" },
  { id: 4, status: "Online", timeService: "No issues", software: "No issues", storage: "1 issue" },
  { id: 5, status: "Online", timeService: "No issues", software: "No issues", storage: "No issues" },
  { id: 6, status: "Online", timeService: "No issues", software: "No issues", storage: "No issues" }
];

const getIcon = (text) => {
  return text.includes("No issues") ? <CheckCircle color="green" size={16} /> : <MinusCircle color="red" size={16} />;
};

const SystemHealth = () => {
  return (
    <div className="system-health">
      {monitors.map((monitor) => (
        <div key={monitor.id} className="monitor-card">
          <div className="monitor-header">Monitor Number {monitor.id}</div>
          <div className="monitor-content">
            <p><strong>Status:</strong> {monitor.status} {getIcon(monitor.status)}</p>
            <p><strong>Windows Time Service:</strong> {monitor.timeService} {getIcon(monitor.timeService)}</p>
            <p><strong>Software and Apps:</strong> {monitor.software} {getIcon(monitor.software)}</p>
            <p><strong>Storage Capacity:</strong> {monitor.storage} {getIcon(monitor.storage)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SystemHealth;
