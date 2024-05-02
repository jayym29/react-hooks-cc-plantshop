import React from "react";

const Search = ({ searchInput, onSearchInput }) => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={searchInput}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearchInput(e.target.value)}
      />
    </div>
  );
};

export default Search;
