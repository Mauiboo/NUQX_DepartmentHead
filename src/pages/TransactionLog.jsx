import React, { useState } from "react";
import { FilterButton, SortButton } from "../Transaction/FilterBySortBy";
import Table from "../Transaction/Table";
import TransactionModal from "../Transaction/TransactionModal"; // Import Modal
import "./TransactionLog.css";

const TransactionLog = () => {
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedTransaction, setSelectedTransaction] = useState(null); // Store selected transaction

  return (
    <div className="transaction-container">
      <div className="filter-container">
        <FilterButton setFilter={setFilter} />
      </div>
      <div className="sort-container">
        <SortButton setSortOrder={setSortOrder} />
      </div>
      <div className="transaction-log">
        <Table filter={filter} sortOrder={sortOrder} onTicketClick={setSelectedTransaction} />
      </div>

      {/* Show modal if a transaction is selected */}
      {selectedTransaction && (
        <TransactionModal transaction={selectedTransaction} onClose={() => setSelectedTransaction(null)} />
      )}
    </div>
  );
};

export default TransactionLog;
