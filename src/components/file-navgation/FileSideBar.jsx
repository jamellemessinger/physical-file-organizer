import React from 'react';
import AllFilesButton from './AllFilesButton';
import FilterContainer from './FilterContainer';
import CollapseSideBarButton from './CollapseSideBarButton';

export default function SideBar() {
  return (
    <>
      <CollapseSideBarButton />
      <AllFilesButton />
      <FilterContainer />
    </>
  );
}
