import React from 'react';

export default function AddFileButton({ isOpen, onAddFileButtonClick }) {
  return (
    <button onClick={onAddFileButtonClick}>
      {isOpen ? 'X' : 'Add File Button'}
    </button>
  );
}
