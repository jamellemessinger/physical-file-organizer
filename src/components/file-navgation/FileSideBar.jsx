'use client';

import React, { useState } from 'react';
import AllFilesButton from './AllFilesButton';
import FilterContainer from './FilterContainer';
import CollapseSideBarButton from './CollapseSideBarButton';

export default function FileSideBar({ handleFilterOnClick, filters }) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

  const handleSideBarOnClick = () => {
    setSideBarIsOpen((prev) => !prev);
  };

  return (
    <aside className="flex flex-col">
      <CollapseSideBarButton onClick={handleSideBarOnClick} />
      {sideBarIsOpen && (
        <>
          <AllFilesButton />
          <FilterContainer onClick={handleFilterOnClick} filters={filters} />
        </>
      )}
    </aside>
  );
}
