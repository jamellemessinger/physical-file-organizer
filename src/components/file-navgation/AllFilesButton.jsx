import React from 'react';

export default function AllFilesButton({ isLoading, handleClearFilters }) {
  return (
    <button
      disabled={isLoading}
      className="p-2 m-3 rounded-xl"
      onClick={handleClearFilters}
    >
      Show All Files
    </button>
  );
}
