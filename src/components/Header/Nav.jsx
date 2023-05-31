import React from 'react';
import { Link } from 'react-scroll';

const menuItems = [
  { to: 'home', title: 'home' },
  { to: 'about', title: 'about me' },
  { to: 'skills', title: 'skills' },
  { to: 'work', title: 'work' },
  { to: 'contact', title: 'contact' },
];

export default function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav_items'>
        {menuItems.map(({ to, title }, idx) => (
          <li key={idx}>
            <Link to={to} activeClass='active' smooth={true} spy={true}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
