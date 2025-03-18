import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './LineGraph.css';

const data = [
    { name: 'FEB 1', time: 300 },  // 5:00 AM
    { name: 'FEB 2', time: 480 },  // 8:00 AM
    { name: 'FEB 3', time: 900 },  // 3:00 PM
    { name: 'FEB 4', time: 1200 }, // 8:00 PM
    { name: 'FEB 5', time: 1350 }, // 10:30 PM
    { name: 'FEB 6', time: 1430 }, // 11:50 PM
    { name: 'FEB 7', time: 180 },  // 3:00 AM
    { name: 'FEB 8', time: 620 },  // 10:20 AM
    { name: 'FEB 9', time: 800 },  // 1:20 PM
    { name: 'FEB 10', time: 1020 } // 5:00 PM
];

// Function to convert minutes to Philippine Time (PHT)
const formatPHT = (minutes) => {
    const referenceDate = new Date(); // Get current date
    referenceDate.setHours(0, 0, 0, 0); // Reset to midnight
    referenceDate.setMinutes(minutes); // Add minutes to get real-time value

    return referenceDate.toLocaleTimeString('en-PH', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Show AM/PM format
        timeZone: 'Asia/Manila' // Ensure it's Philippine Time
    });
};

const LineGraph = () => {
    return (
        <div className="line-graph-container">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    {/* Format Y-Axis values as Philippine Time */}
                    <YAxis tickFormatter={formatPHT} />
                    <Tooltip formatter={(value) => formatPHT(value)} />
                    <Line type="monotone" dataKey="time" stroke="#35408E" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>

            <div className="avg-turnaround-time">
                <p>
                    <span>AVG. TURNAROUND TIME:</span> <strong>10:15 AM PHT</strong>
                </p>
            </div>
        </div>
    );
};

export default LineGraph;
