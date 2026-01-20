import React from 'react';

export default function CollapseSideBarButton({ onClick }) {
  return (
    <div className='flex justify-end'>
      <button onClick={() => onClick()}>=</button>
    </div>
  );
}
