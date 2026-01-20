import React from 'react';

export default function SearchBar({ search, searchValue }) {
  return (
    <input
      className='w-1/2 mx-auto'
      type="text"
      name="seachBar"
      placeholder="Seach your files"
      value={searchValue}
      onChange={(e) => search(e.target.value)}
    />
  );
}
