import React from 'react';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='header'>
      <div className='common_inner'>
        <div className='header_content'>
          <h1 className='header_logo'>
            HWANG <span></span> SUYEON
          </h1>
          <Nav />
        </div>
      </div>
    </header>
  );
}
