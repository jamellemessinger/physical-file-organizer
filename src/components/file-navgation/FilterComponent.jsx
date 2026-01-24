import React, { useState } from 'react';

export default function FilterComponent({
  title,
  isExpanded,
  name,
  items,
  activeItems,
  handleExpandFilter,
  handleSelectFilter,
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
            <li
              className={`cursor-pointer rounded-full p-2 m-1 text-center hover:bg-gray-300 hover:text-black active:bg-gray-400 active:shadow-md active:transform active:scale-105 ${activeItems.includes(item) ? 'bg-blue-400 text-white border border-black' : 'bg-gray-200'} transition-all duration-150`}
              key={key}
              onClick={() => handleSelectFilter(name, item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
