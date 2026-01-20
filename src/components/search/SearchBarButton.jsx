import React from 'react';

export default function SearchBarButton({ isShown, onClick }) {
  return (
    <button onClick={onClick}>{isShown ? 'X' : 'Q'}</button>
  );
}
