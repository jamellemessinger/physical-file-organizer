import React, { useState } from 'react';

export default function FilterComponent({ onClick, title, isExpanded, name }) {
  return (
    <>
      <div>{title}</div>
      <button onClick={() => onClick(name)}>{isExpanded ? '-' : '+'}</button>
    </>
  );
}
