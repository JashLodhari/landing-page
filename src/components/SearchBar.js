import React, { useState, useCallback } from "react";
import _ from "lodash";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const debouncedSearch = useCallback(
    _.debounce((searchText) => onSearch(searchText), 500),
    []
  );

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
