import React from 'react';
import './SummaryReport.css';

const SummaryReport = ({ mostActive, leastActive }) => {
    // Ensure that the values are properly formatted as time
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }); 
    };

    return (
        <div className="summary-report-container">
            <div className="summary-report-header">
                Summary Report
            </div>
            <div className="summary-report-body">
                <p><strong>Most active time:</strong> {formatTime(mostActive)}</p>
                <p><strong>Least active time:</strong> {formatTime(leastActive)}</p>
            </div>
        </div>
    );
};

export default SummaryReport;
