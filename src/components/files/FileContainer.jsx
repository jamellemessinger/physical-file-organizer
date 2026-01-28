'use client';

import { useState } from 'react';
import FileRow from './FileRow';

export default function FileContainer({
  searchQuery,
  filteredFiles,
  deleteFile,
}) {
  const [selectedFileId, setSelectedFileId] = useState(null);
  const handleOnSelected = (id) => {
    selectedFileId === id ? setSelectedFileId(null) : setSelectedFileId(id);
  };

  return (
    <div className="flex flex-col flex-1 w-full border border-black">
      {/* Header row */}
      <div className="grid grid-cols-11 gap-5 file-row header p-3 text-xl">
        <span className="col-span-4">Title</span>
        <span className="col-span-2">Category</span>
        <span className="col-span-2">Location</span>
        <span className="col-span-2">Tags</span>
      </div>

      {/* File rows */}
      {filteredFiles.length === 0 && searchQuery.length > 0 ? (
        <div className="flex flex-col flex-1 justify-center text-center italic text-5xl text-gray-300">
          No Files Found!
        </div>
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
