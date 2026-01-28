import React from 'react';

export default function SearchBarButton({ isLoading, isShown, onClick }) {
  return (
    <button disabled={isLoading} onClick={onClick}>
      {isShown ? 'X' : 'Q'}
    </button>
  );
}
