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
      const response = await fetch('/api/files');
      const json = await response.json();

      setFiles(json);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const filteredFiles = files.filter((file) =>
    file.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Delete File
  const handleDeleteFile = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this file?',
    );
    if (confirmed) {
      // user clicked "OK"
      try {
        const response = await fetch(`/api/files/${id}`, {
          method: 'DELETE',
        });
      } catch (err) {
        console.log(err);
      } finally {
        fetchData();
      }
    } else {
      // user clicked "Cancel"
      return;
    }
  };

  return (
    <>
      <FileSideBar />
      <SearchContainer
        search={setSearchQuery}
        searchValue={searchQuery}
        onUserIconClick={handleUserIconClick}
      />
      {userPanelOpen && <UserPanel />}
      <FileContainer
        filteredFiles={filteredFiles}
        deleteFile={handleDeleteFile}
      />
      <AddFileButton
        isOpen={addFilePanelOpen}
        onAddFileButtonClick={handleAddFileButtonClick}
      />
      {addFilePanelOpen && <AddFilePanel fetchData={fetchData} />}
    </>
  );
}
