import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { to: '/', title: 'home' },
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
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
