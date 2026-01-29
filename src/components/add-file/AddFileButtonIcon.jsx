import React from 'react';

export default function AddFileButtonIcon({
  isLoading,
  isOpen,
  onAddFileButtonIconClick,
}) {
  return (
    <button className='text-5xl' disabled={isLoading} onClick={onAddFileButtonIconClick}>
      {isOpen ? 'x' : '+'}
    </button>
  );
}
