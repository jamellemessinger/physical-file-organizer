import React from 'react';

export default function AllFilesButton({ isLoading, handleClearFilters }) {
  return (
    <button disabled={isLoading} className="p-5" onClick={handleClearFilters}>
      AllFilesButton
    </button>
  );
}
