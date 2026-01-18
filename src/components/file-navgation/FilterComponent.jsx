import React from 'react';

export default function FilterComponent({filterType}) {
  return (
    <>
      <div>{filterType}</div>
      <button>+ or -</button>
    </>
  );
}
