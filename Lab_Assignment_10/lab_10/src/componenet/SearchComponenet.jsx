import React, { useState } from "react";
import "./main.css";
const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div class="center">
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleSearch}
        />
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
