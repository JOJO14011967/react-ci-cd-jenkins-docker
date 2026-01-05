import { useState } from "react";
import "./index.css";

const FilterSection = ({ onFilterChange }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // 🔍 Handle search
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onFilterChange({ type: selectedType, search: value });
  };

  // ⚙️ Handle radio filter
  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);
    onFilterChange({ type: value, search: searchText });
  };

  return (
    <div className="filter-section bg-dark text-white p-3 rounded">
      <h5 className="mb-3">Search & Filter</h5>

      {/* 🔍 Search Box */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by title or location..."
        value={searchText}
        onChange={handleSearchChange}
      />

      {/* ⚙️ Employment Type Filters */}
      <div className="d-flex flex-column gap-2">
        <label>
          <input
            type="radio"
            name="employmentType"
            value=""
            checked={selectedType === ""}
            onChange={handleTypeChange}
          />{" "}
          All
        </label>

        <label>
          <input
            type="radio"
            name="employmentType"
            value="FULLTIME"
            onChange={handleTypeChange}
            checked={selectedType === "FULLTIME"}
          />{" "}
          Full Time
        </label>

        <label>
          <input
            type="radio"
            name="employmentType"
            value="PARTTIME"
            onChange={handleTypeChange}
            checked={selectedType === "PARTTIME"}
          />{" "}
          Part Time
        </label>

        <label>
          <input
            type="radio"
            name="employmentType"
            value="FREELANCE"
            onChange={handleTypeChange}
            checked={selectedType === "FREELANCE"}
          />{" "}
          Freelance
        </label>

        <label>
          <input
            type="radio"
            name="employmentType"
            value="INTERNSHIP"
            onChange={handleTypeChange}
            checked={selectedType === "INTERNSHIP"}
          />{" "}
          Internship
        </label>
      </div>
    </div>
  );
};

export default FilterSection;

