import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <div className='common_inner'>
        <div className='header_content'>
          <h1 className='header_logo'>
            <Link to='/'>
              HWANG <span></span> SUYEON
            </Link>
          </h1>
          <Nav />
        </div>
      </div>
    </header>
  );
}
