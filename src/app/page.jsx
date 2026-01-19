'use client';

import AddFileButton from '@/components/add-file/AddFileButton';
import AddFilePanel from '@/components/add-file/AddFilePanel';
import FileSideBar from '@/components/file-navgation/FileSideBar';
import FileContainer from '@/components/files/FileContainer';
import SearchContainer from '@/components/search/SearchContainer';
import UserPanel from '@/components/user-navigation/UserPanel';
import React, { useState } from 'react';

export default function Home() {
  const [userPanelOpen, setUserPanelOpen] = useState(false);
  const handleUserIconClick = () => {
    setUserPanelOpen((prev) => !prev);
  };

  const [addFilePanelOpen, setAddFilePanelOpen] = useState(false);
  const handleAddFileButtonClick = () => {
    setAddFilePanelOpen((prev) => !prev);
  };

  return (
    <>
      <FileSideBar />
      <SearchContainer onUserIconClick={handleUserIconClick} />
      {userPanelOpen && <UserPanel />}
      <FileContainer />
      <AddFileButton isOpen={addFilePanelOpen} onAddFileButtonClick={handleAddFileButtonClick} />
      {addFilePanelOpen && <AddFilePanel />}
    </>
  );
}
