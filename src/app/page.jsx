'use client';

import AddFileButton from '@/components/add-file/AddFileButton';
import AddFilePanel from '@/components/add-file/AddFilePanel';
import FileSideBar from '@/components/file-navgation/FileSideBar';
import FileContainer from '@/components/files/FileContainer';
import SearchContainer from '@/components/search/SearchContainer';
import UserPanel from '@/components/user-navigation/UserPanel';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [userPanelOpen, setUserPanelOpen] = useState(false);
  const handleUserIconClick = () => {
    setUserPanelOpen((prev) => !prev);
  };

  const [addFilePanelOpen, setAddFilePanelOpen] = useState(false);
  const handleAddFileButtonClick = () => {
    setAddFilePanelOpen((prev) => !prev);
  };

  const [files, setFiles] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('api/files');
      const json = await response.json();

      setFiles(json);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <FileSideBar />
      <SearchContainer onUserIconClick={handleUserIconClick} />
      {userPanelOpen && <UserPanel />}
      <FileContainer files={files} />
      <AddFileButton
        isOpen={addFilePanelOpen}
        onAddFileButtonClick={handleAddFileButtonClick}
      />
      {addFilePanelOpen && <AddFilePanel fetchData={fetchData} />}
    </>
  );
}
