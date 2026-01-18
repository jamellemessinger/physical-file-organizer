'use client';

import FileRow from './FileRow';

export default function FileContainer() {
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
        <FileRow key={file.id} file={file} />
      ))}
    </div>
  );
}
