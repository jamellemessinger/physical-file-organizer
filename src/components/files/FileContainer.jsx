'use client';

import { useState } from 'react';
import FileRow from './FileRow';
import FileHeader from './FileHeader';

export default function FileContainer({
  searchQuery,
  filteredFiles,
  isLoading,
  filesEmpty,
  deleteFile,
}) {
  const [selectedFileId, setSelectedFileId] = useState(null);
  const handleOnSelected = (id) => {
    selectedFileId === id ? setSelectedFileId(null) : setSelectedFileId(id);
  };

  if (isLoading) {
    return (
      <div className="file-container">
        <FileHeader />
        <p className="file-container-alt-text">Loading...</p>
      </div>
    );
  }

  if (filesEmpty) {
    return (
      <div className="file-container">
        <FileHeader />
        <p className="file-container-alt-text">
          No Files Saved.
          <br />
          <br />
          Click the "+" in the Bottom-Right Corner to Add a New File.
        </p>
      </div>
    );
  }

  return (
    <div className="file-container">
      <FileHeader />

      {/* File rows */}
      {filteredFiles.length === 0 &&
      searchQuery.length > 0 &&
      isLoading === false ? (
        <p className="file-container-alt-text">No Files Found!</p>
      ) : (
        filteredFiles.map((file) => (
          <FileRow
            key={file.id}
            file={file}
            isSelected={file.id === selectedFileId}
            onClick={() => handleOnSelected(file.id)}
            deleteFile={deleteFile}
          />
        ))
      )}
    </div>
  );
}
