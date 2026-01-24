'use client';

import React, { useState } from 'react';
import AllFilesButton from './AllFilesButton';
import FilterContainer from './FilterContainer';
import CollapseSideBarButton from './CollapseSideBarButton';

export default function FileSideBar({
  filterNames,
  filterExpanded,
  filterItems,
  activeItems,
  handleExpandFilter,
  handleClearFilters,
  handleSelectFilter,
}) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

  const handleSideBarOnClick = () => {
    setSideBarIsOpen((prev) => !prev);
  };

  return (
    <aside className="flex flex-col">
      <CollapseSideBarButton onClick={handleSideBarOnClick} />
      {sideBarIsOpen && (
        <>
          <AllFilesButton handleClearFilters={handleClearFilters} />
          <FilterContainer
            filterNames={filterNames}
            filterExpanded={filterExpanded}
            filterItems={filterItems}
            activeItems={activeItems}
            handleExpandFilter={handleExpandFilter}
            handleSelectFilter={handleSelectFilter}
          />
        </>
      )}
    </aside>
  );
}
