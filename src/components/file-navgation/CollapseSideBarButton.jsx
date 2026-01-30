import React from 'react';

export default function CollapseSideBarButton({ handleSideBarOnClick }) {
  return (
    <div className="flex justify-end">
      <button
        className="p-2 rounded-lg size-8"
        onClick={() => handleSideBarOnClick()}
      >
        =
      </button>
    </div>
  );
}
