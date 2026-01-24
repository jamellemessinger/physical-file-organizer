import React, { useState } from 'react';

export default function FilterComponent({
  handleExpandFilter,
  title,
  isExpanded,
  name,
  items,
}) {
  return (
    <div>
      <div className="flex justify-between py-2">
        <div>{title}</div>
        <button onClick={() => handleExpandFilter(name)}>
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && (
        <ul>
          {items.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
