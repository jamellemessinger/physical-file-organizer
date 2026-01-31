import React from 'react';

export default function FloatingActionIcon({
  isLoading,
  isOpen,
  onFloatingActionIconClick,
}) {
  return (
    <button
      className="absolute right-7 bottom-7 text-3xl rounded-full size-11 pb-2"
      disabled={isLoading}
      onClick={onFloatingActionIconClick}
    >
      {isOpen ? 'x' : '+'}
    </button>
  );
}
