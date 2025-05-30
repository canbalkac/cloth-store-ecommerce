import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex items-center bg-buttonBg mt-4 w-full md:w-[300px] px-2">
      <CiSearch className="text-gray-600 text-2xl" />
      <input
        className="placeholder:absolute placeholder:text-gray-600 p-2 placeholder:right-2 placeholder:top-1/2 placeholder:-translate-y-1/2 w-full focus:outline-none focus:shadow-none"
        type="search"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
