import React, { useState } from 'react';
import FilterItemButton from '@/components/file-navgation/FilterItemButton';

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
        <button
          className="rounded-full size-6 pb-2"
          disabled={isLoading}
          onClick={() => handleExpandFilter(name)}
        >
          {isExpanded ? '-' : '+'}
        </button>
      </div>

      {isExpanded && (
        <ul>
          {items.map((item) => (
            <li key={item}>
              <FilterItemButton
                label={item}
                isActive={activeItems.includes(item)}
                isDisabled={isLoading}
                onSelect={() => handleSelectFilter(name, item)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
