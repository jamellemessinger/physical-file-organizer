import React from 'react';

export default function FileHeader() {
  return (
    <div className="grid grid-cols-11 gap-5 file-row header p-3 text-xl">
      <span className="col-span-4">Title</span>
      <span className="col-span-2">Category</span>
      <span className="col-span-2">Location</span>
      <span className="col-span-2">Tags</span>
    </div>
  );
}
