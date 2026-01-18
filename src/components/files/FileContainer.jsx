'use client';

import { useState } from 'react';
import FileRow from './FileRow';

export default function FileContainer() {
  const [selectedFileId, setSelectedFileId] = useState(null);
  const handleOnSelected = (id) => {
    selectedFileId === id ? setSelectedFileId(null) : setSelectedFileId(id);
  };
  const files = [
    {
      id: 1,
      title: 'Car Insurance Policy',
      category: 'Insurance',
      location: 'Folder A / Drawer 2',
      tags: ['car', 'insurance'],
    },
    {
      id: 2,
      title: 'Birth Certificate',
      category: 'Personal',
      location: 'Safe',
      tags: ['important'],
    },
  ];

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
      {files.map((file) => (
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
