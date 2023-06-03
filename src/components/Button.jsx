import React from 'react';

export default function Button({ children, accent }) {
  return (
    <button className={`btn_primary ${accent ? 'accent' : ''}`}>
      {children}
    </button>
  );
}
