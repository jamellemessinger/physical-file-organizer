'use client';

import FloatingActionIcon from '@/components/actions/FloatingActionIcon';
import AddFileAction from '@/components/actions/AddFileAction';
import FileSideBar from '@/components/file-navgation/FileSideBar';
import FileContainer from '@/components/files/FileContainer';
import SearchContainer from '@/components/search/SearchContainer';
import UserPanel from '@/components/user-navigation/UserPanel';
import getFilterItems from '@/helper-functions/getFilterItems';
import filterFiles from '@/helper-functions/filterFiles';
import React, { useEffect, useState } from 'react';

export default function Home() {
  // files
  const [files, setFiles] = useState([]);
  const [addFileActionModalOpen, setAddFileActionModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const filesEmpty = files.length === 0;
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/files');
      const json = await response.json();

      setFiles(json);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };
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
  const handleFloatingActionIconClick = () => {
    setAddFileActionModalOpen((prev) => !prev);
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
  const [activeItems, setActiveItems] = useState({
    category: [],
    location: [],
    tags: [],
  });
  const handleClearFilters = () => {
    setActiveItems({
      category: [],
      location: [],
      tags: [],
    });
  };
  const handleSelectFilter = (name, item) => {
    if (activeItems[name].includes(item)) {
      const filteredItemList = activeItems[name].filter(
        (value) => value !== item,
      );
      setActiveItems((prev) => ({
        ...prev,
        [name]: filteredItemList,
      }));
    } else {
      setActiveItems((prev) => ({
        ...prev,
        [name]: [...prev[name], item],
      }));
    }
  };

  // search
  const [searchQuery, setSearchQuery] = useState('');
  const filteredFiles = filterFiles(files, activeItems).filter((file) =>
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
    <main className="flex h-screen bg-gray-100">
      <FileSideBar
        isLoading={isLoading}
        filterNames={filterNames}
        filterExpanded={filterExpanded}
        filterItems={filterItems}
        activeItems={activeItems}
        handleExpandFilter={handleExpandFilter}
        handleClearFilters={handleClearFilters}
        handleSelectFilter={handleSelectFilter}
      />
      <section className="flex flex-col flex-1 w-full p-5">
        <SearchContainer
          isLoading={isLoading}
          searchValue={searchQuery}
          search={setSearchQuery}
          onUserIconClick={handleUserIconClick}
        />
        {userPanelOpen && <UserPanel />}
        <FileContainer
          searchQuery={searchQuery}
          filteredFiles={filteredFiles}
          isLoading={isLoading}
          filesEmpty={filesEmpty}
          deleteFile={handleDeleteFile}
        />
      </section>
      <FloatingActionIcon
        isLoading={isLoading}
        isOpen={addFileActionModalOpen}
        onFloatingActionIconClick={handleFloatingActionIconClick}
      />
      {addFileActionModalOpen && (
        <AddFileAction
          fetchData={fetchData}
          closeAddFileIcon={setAddFileActionModalOpen}
        ></AddFileAction>
      )}
    </main>
  );
}
