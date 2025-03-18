import React from "react";

const FilterButton = ({ setFilter }) => {
  return (
    <button onClick={() => setFilter("Registrar")}>Filter By</button>
  );
};

const SortButton = ({ setSortOrder }) => {
  return (
    <button onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}>Sort By</button>
  );
};

export { FilterButton, SortButton };