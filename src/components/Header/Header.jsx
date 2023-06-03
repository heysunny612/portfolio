import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { BsStar } from 'react-icons/bs';

export default function Header() {
  return (
    <header className='header'>
      <div className='common_inner'>
        <div className='header_content'>
          <h1 className='header_logo'>
            <Link to='/'>
              <BsStar />
              <span className='star'>
                <BsStar />
              </span>
              <span>S</span>
            </Link>
          </h1>
          <Nav />
        </div>
      </div>
    </header>
  );
}
