import React from 'react';

export default function AllFilesButton({ handleClearFilters }) {
  return (
    <button className="p-5" onClick={handleClearFilters}>
      AllFilesButton
    </button>
  );
}
