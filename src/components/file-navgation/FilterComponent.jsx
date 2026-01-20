import React, { useState } from 'react';

export default function FilterComponent({ onClick, title, isExpanded, name }) {
  return (
    <div className='flex justify-between py-2'>
      <div>{title}</div>
      <button onClick={() => onClick(name)}>{isExpanded ? '-' : '+'}</button>
    </div>
  );
}
