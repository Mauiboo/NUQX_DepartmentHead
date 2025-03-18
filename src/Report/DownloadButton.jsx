import React from 'react';
import { FileText } from 'lucide-react';
import './DownloadButton.css';


const DownloadButton = () => {
  return (
    <button className="bg-blue-800 text-white p-3 flex items-center gap-2 rounded">
      <FileText /> Download Report
    </button>
  );
};

export default DownloadButton;
