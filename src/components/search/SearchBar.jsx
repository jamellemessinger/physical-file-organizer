import React from 'react';

export default function SearchBar({ search, searchValue }) {
  return (
    <input
      type="text"
      name="seachBar"
      placeholder="Seach your files"
      value={searchValue}
      onChange={(e) => search(e.target.value)}
    />
  );
}
