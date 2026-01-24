'use client';

import AddFileButtonIcon from '@/components/add-file/AddFileButtonIcon';
import AddFilePanel from '@/components/add-file/AddFilePanel';
import FileSideBar from '@/components/file-navgation/FileSideBar';
import FileContainer from '@/components/files/FileContainer';
import SearchContainer from '@/components/search/SearchContainer';
import UserPanel from '@/components/user-navigation/UserPanel';
import getFilterItems from '@/helper-functions/getFilterItems';
import React, { useEffect, useState } from 'react';

export default function Home() {
  // files
  const [files, setFiles] = useState([]);
  const [addFilePanelOpen, setAddFilePanelOpen] = useState(false);

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

  const fetchData = async () => {
    try {
      const response = await fetch('/api/files');
      const json = await response.json();

      setFiles(json);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleAddFileButtonIconClick = () => {
    setAddFilePanelOpen((prev) => !prev);
  };

  // filter
  const filterNames = {
    category: 'Category',
    location: 'Location',
    tags: 'Tags',
  };

  const [filterExpanded, setFilterExpanded] = useState({
    category: {
      isExpanded: false,
    },
    location: {
      isExpanded: false,
    },
    tags: {
      isExpanded: false,
    },
  });

  const filterItems = getFilterItems(files);

  const handleExpandFilter = (name) => {
    setFilterExpanded((prev) => ({
      ...prev,
      [name]: {
        isExpanded: !prev[name].isExpanded,
      },
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      category: {},
      location: {},
      tags: {},
    });
  };

  // search
  const [searchQuery, setSearchQuery] = useState('');
  const filteredFiles = files.filter((file) =>
    file.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // user panel
  const [userPanelOpen, setUserPanelOpen] = useState(false);
  const handleUserIconClick = () => {
    setUserPanelOpen((prev) => !prev);
  };

  // UseEffects
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex p-5 h-screen bg-gray-100">
      <FileSideBar
        filterNames={filterNames}
        filterExpanded={filterExpanded}
        filterItems={filterItems}
        handleExpandFilter={handleExpandFilter}
        handleClearFilters={handleClearFilters}
      />
      <section className="flex flex-col p-5">
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
      </section>
      <AddFileButtonIcon
        isOpen={addFilePanelOpen}
        onAddFileButtonIconClick={handleAddFileButtonIconClick}
      />
      {addFilePanelOpen && (
        <AddFilePanel
          fetchData={fetchData}
          closeAddFileIcon={setAddFilePanelOpen}
        ></AddFilePanel>
      )}
    </main>
  );
}
