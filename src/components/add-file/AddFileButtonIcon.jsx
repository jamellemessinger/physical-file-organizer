import React from 'react';

export default function AddFileButtonIcon({
  isOpen,
  onAddFileButtonIconClick,
}) {
  return (
    <button onClick={onAddFileButtonIconClick}>{isOpen ? 'X' : '+'}</button>
  );
}
