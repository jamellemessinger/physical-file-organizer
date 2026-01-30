import React from 'react';

export default function SearchBar({ search, searchValue }) {
  return (
    <input
      className="w-1/2 border border-black rounded-full px-3 py-1 mx-auto"
      type="text"
      name="seachBar"
      placeholder="Seach your files"
      value={searchValue}
      onChange={(e) => search(e.target.value)}
    />
  );
}
