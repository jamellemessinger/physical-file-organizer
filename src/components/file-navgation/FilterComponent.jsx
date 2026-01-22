import React, { useState } from 'react';

export default function FilterComponent({
  onClick,
  title,
  isExpanded,
  name,
  items,
}) {

  // console.log(`${title}: items: ${items}`)
  return (
    <div>
      <div className="flex justify-between py-2">
        <div>{title}</div>
        <button onClick={() => onClick(name)}>{isExpanded ? '-' : '+'}</button>
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
