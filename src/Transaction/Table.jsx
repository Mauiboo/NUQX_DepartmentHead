import React from "react";

const transactions = [
  { id: 1, admin: "Shaira Kei Tayag", department: "Registrar", ticket: "ENR0001", date: "11/02/25", time: "4:00 PM" },
  { id: 2, admin: "Warren H. Bollinger", department: "Admissions", ticket: "ADM0001", date: "11/02/25", time: "3:30 PM" },
  { id: 3, admin: "Jasper Dela Cruz", department: "Accounting", ticket: "PAY0001", date: "11/02/25", time: "3:23 PM" },
  { id: 4, admin: "Maureen Cruzada", department: "Registrar", ticket: "ENR0002", date: "11/02/25", time: "3:12 PM" },
  { id: 5, admin: "Michael R. Doak", department: "Accounting", ticket: "PAY0002", date: "11/02/25", time: "2:55 PM" },
];

const Table = ({ filter, sortOrder, onTicketClick }) => {
  let filteredData = filter ? transactions.filter((txn) => txn.department === filter) : transactions;

  filteredData.sort((a, b) => {
    return sortOrder === "asc" ? new Date(a.date + " " + a.time) - new Date(b.date + " " + b.time) : new Date(b.date + " " + b.time) - new Date(a.date + " " + a.time);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Admin Name</th>
          <th>Department</th>
          <th>Ticket Number</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((txn) => (
          <tr key={txn.id}>
            <td>{txn.admin}</td>
            <td>{txn.department}</td>
            {/* Make ticket clickable */}
            <td style={{ cursor: "pointer", color: "#35408E", textDecoration: "underline" }} onClick={() => onTicketClick(txn)}>
              {txn.ticket}
            </td>
            <td>{txn.date}</td>
            <td>{txn.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
