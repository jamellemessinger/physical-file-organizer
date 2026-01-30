import React from 'react';

export default function AddFileButtonIcon({
  isLoading,
  isOpen,
  onAddFileButtonIconClick,
}) {
  return (
    <button
      className="absolute right-7 bottom-7 text-3xl rounded-full size-11 pb-2"
      disabled={isLoading}
      onClick={onAddFileButtonIconClick}
    >
      {isOpen ? 'x' : '+'}
    </button>
  );
}
