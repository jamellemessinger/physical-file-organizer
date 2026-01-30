import React from 'react';

export default function SearchBarButton({ isLoading, isShown, onClick }) {
  return (
    <button
      className="text-xl p-2 rounded-xl"
      disabled={isLoading}
      onClick={onClick}
    >
      {isShown ? 'Close' : 'Search'}
    </button>
  );
}
