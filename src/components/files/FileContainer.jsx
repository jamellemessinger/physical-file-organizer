'use client';

import { useState } from 'react';
import FileRow from './FileRow';

export default function FileContainer({ filteredFiles, deleteFile }) {
  const [selectedFileId, setSelectedFileId] = useState(null);
  const handleOnSelected = (id) => {
    selectedFileId === id ? setSelectedFileId(null) : setSelectedFileId(id);
  };

  return (
    <div id="file-container">
      {/* Header row */}
      <div className="grid grid-cols-10 gap-5 file-row header p-3">
        <span className="col-span-4">Title</span>
        <span className="col-span-2">Category</span>
        <span className="col-span-2">Location</span>
        <span className="col-span-2">Tags</span>
      </div>

      {/* File rows */}
      {filteredFiles.map((file) => (
        <FileRow
          key={file.id}
          file={file}
          isSelected={file.id === selectedFileId}
          onClick={() => handleOnSelected(file.id)}
          deleteFile={deleteFile}
        />
      ))}
    </div>
  );
}
