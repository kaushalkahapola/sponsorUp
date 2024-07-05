import React from "react";
import { Button } from "./Buttons";
import { FiSearch } from "react-icons/fi"; // Importing the search icon

function SponsorSearchBar({ searchText, setSearchText, onSearchButtonClick }) {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="max-w-screen-lg w-full mx-4 flex">
        <input
          type="text"
          placeholder="Search for sponsors..."
          className="flex-1 px-4 py-2 border border-primary-700 rounded focus:outline-none focus:border-primary bg-white text-gray-800"
          style={{ marginRight: "8px" }} // Adding a little gap between input and button
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
          icon={<FiSearch />}
          id={"search-btn"}
          text="Find"
          onClick={onSearchButtonClick}
        />
      </div>
    </div>
  );
}

export default SponsorSearchBar;
