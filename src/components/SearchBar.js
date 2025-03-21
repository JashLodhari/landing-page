// src/components/SearchBar.js
import React, { useState, useCallback } from "react";
import _ from "lodash";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Debounced Search to Improve Performance
  const debouncedSearch = useCallback(
    _.debounce((searchText) => onSearch(searchText), 500),
    []
  );

  // Handle Input Change
  const handleChange = (event) => {
    const searchText = event.target.value;
    setQuery(searchText);
    debouncedSearch(searchText.toLowerCase());
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search users..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
