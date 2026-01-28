import React, { useState } from 'react';

export default function FilterComponent({
  isLoading,
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
        <button disabled={isLoading} onClick={() => handleExpandFilter(name)}>
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && (
        <ul>
          {items.map((item) => (
            <li key={item}>
              <button
                className={`cursor-pointer rounded-full p-2 m-1 text-center ${isLoading ? 'text-gray-400 bg-gray-100' : 'hover:bg-gray-300 hover:text-black'}  active:bg-gray-400 active:shadow-md active:transform active:scale-105 ${activeItems.includes(item) ? 'bg-blue-400 text-white border border-black' : 'bg-gray-200'} transition-all duration-150`}
                disabled={isLoading}
                onClick={() => handleSelectFilter(name, item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
