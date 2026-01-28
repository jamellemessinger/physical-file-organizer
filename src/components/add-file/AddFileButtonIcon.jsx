import React from 'react';

export default function AddFileButtonIcon({
  isLoading,
  isOpen,
  onAddFileButtonIconClick,
}) {
  return (
    <button disabled={isLoading} onClick={onAddFileButtonIconClick}>
      {isOpen ? 'X' : '+'}
    </button>
  );
}
