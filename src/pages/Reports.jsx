import React from 'react';
import LineGraph from '../Report/LineGraph';
import Dropdown from '../Report/Dropdown';
import SummaryReport from '../Report/SummaryReport';
import DownloadButton from '../Report/DownloadButton';

const Reports = () => {
  return (
      <div className="report-container">
          <div className="report-header">
              <Dropdown />
              <DownloadButton />
          </div>

          <div className="report-content">
              <LineGraph />
              <SummaryReport mostActive="Feb 9" leastActive="Feb 3" />
          </div>
      </div>
  );
};

export default Reports;

