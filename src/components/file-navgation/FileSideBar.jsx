'use client';

import React, { useState } from 'react';
import AllFilesButton from './AllFilesButton';
import FilterContainer from './FilterContainer';
import CollapseSideBarButton from './CollapseSideBarButton';

export default function FileSideBar({
  isLoading,
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
    <aside className="flex flex-col pt-3">
      <CollapseSideBarButton handleSideBarOnClick={handleSideBarOnClick} />
      {sideBarIsOpen && (
        <>
          <AllFilesButton
            isLoading={isLoading}
            handleClearFilters={handleClearFilters}
          />
          <FilterContainer
            isLoading={isLoading}
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
