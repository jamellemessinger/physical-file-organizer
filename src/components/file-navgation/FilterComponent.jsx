'use client';

import React from 'react';
import { useState } from 'react';

export default function FilterComponent({ filterType }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>{filterType}</div>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '-' : '+'}</button>
    </>
  );
}
