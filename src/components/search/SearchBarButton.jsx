import React from 'react';

export default function SearchBarButton({ isLoading, isShown, onClick }) {
  return (
    <button className="text-xl" disabled={isLoading} onClick={onClick}>
      {isShown ? 'Close' : 'Search'}
    </button>
  );
}
