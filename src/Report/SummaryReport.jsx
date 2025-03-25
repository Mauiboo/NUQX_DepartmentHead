import React from 'react';
import './SummaryReport.css';

const SummaryReport = () => {
    return (
        <div className="summary-report-container">
            <div className="summary-card">
                <div className="summary-header">TOTAL TRANSACTIONS PER DAY</div>
                <div className="summary-value">150</div>
            </div>
            <div className="summary-card">
                <div className="summary-header">AVG. TURNAROUND TIME</div>
                <div className="summary-value">16:09:08</div>
            </div>
            <div className="summary-card">
                <div className="summary-header">BUSIEST HOUR</div>
                <div className="summary-value">2:00PM</div>
            </div>
            <div className="summary-card">
                <div className="summary-header">MOST FREQUENT CONCERN</div>
                <div className="summary-value">Enrollment</div>
            </div>
        </div>
    );
};

export default SummaryReport;
