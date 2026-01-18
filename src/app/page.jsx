'use client'

import FileSideBar from '@/components/file-navgation/FileSideBar';
import SearchContainer from '@/components/search/SearchContainer';
import UserPanel from '@/components/user-navigation/UserPanel';
import { useState } from 'react';

export default function Home() {
  const [userPanelOpen, setUserPanelOpen] = useState(false);
  const handleUserIconClick = () => {
    setUserPanelOpen((prev) => !prev);
  };

  return (
    <>
      <FileSideBar />
      <SearchContainer onUserIconClick={handleUserIconClick} />

      {userPanelOpen && <UserPanel />}
    </>
  );
}
