'use client';

import React, { useState } from 'react';
import AllFilesButton from './AllFilesButton';
import FilterContainer from './FilterContainer';
import CollapseSideBarButton from './CollapseSideBarButton';

export default function SideBar() {
  const [filters, setFilters] = useState({
    locations: {
      title: 'Locations',
      isExpanded: false,
    },
    tags: {
      title: 'Tags',
      isExpanded: false,
    },
  });

  const handleFilterOnClick = (name) => {
    setFilters((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        isExpanded: !prev[name].isExpanded,
      },
    }));
  };

  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

  const handleSideBarOnClick = () => {
    setSideBarIsOpen((prev) => !prev);
  };

  return (
    <>
      <CollapseSideBarButton onClick={handleSideBarOnClick} />
      {sideBarIsOpen && (
        <>
          <AllFilesButton />
          <FilterContainer onClick={handleFilterOnClick} filters={filters} />
        </>
      )}
    </>
  );
}
