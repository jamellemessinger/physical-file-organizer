'use client'

import FileSideBar from '@/components/file-navgation/FileSideBar';
import SearchContainer from '@/components/search/SearchContainer';
import UserSettings from '@/components/user-navigation/UserSettings';
import { useState } from 'react';

export default function Home() {
  const [userSettingsOpen, setUserSettingsOpen] = useState(false);
  const handleUserIconClick = () => {
    setUserSettingsOpen((prev) => !prev);
  };

  return (
    <>
      <FileSideBar />
      <SearchContainer onUserIconClick={handleUserIconClick} />

      {userSettingsOpen && <UserSettings />}
    </>
  );
}
