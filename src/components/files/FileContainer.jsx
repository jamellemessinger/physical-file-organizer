'use client';

import { useState } from 'react';
import FileRow from './FileRow';

export default function FileContainer({ filteredFiles }) {
  const [selectedFileId, setSelectedFileId] = useState(null);
  const handleOnSelected = (id) => {
    selectedFileId === id ? setSelectedFileId(null) : setSelectedFileId(id);
  };

  return (
    <div id="file-container">
      {/* Header row */}
      <div className="file-row header">
        <span>Title</span>
        <span>Category</span>
        <span>Location</span>
        <span>Tags</span>
      </div>

      {/* File rows */}
      {filteredFiles.map((file) => (
        <FileRow
          key={file.id}
          file={file}
          isSelected={file.id === selectedFileId}
          onClick={() => handleOnSelected(file.id)}
        />
      ))}
    </div>
  );
}
