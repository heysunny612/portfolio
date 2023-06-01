import React from 'react';
import { NavLink } from 'react-router-dom';
import { CiDark, CiLight } from 'react-icons/ci';
import { useThemeContext } from '../../context/ThemeContext';

const menuItems = [
  { to: '/', title: 'Home' },
  { to: 'about', title: 'About me' },
  { to: 'skills', title: 'Blog' },
  { to: 'work', title: 'Work' },
  { to: 'contact', title: 'Contact' },
];

export default function Nav() {
  const { theme, toggleTheme } = useThemeContext();

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
      <button onClick={toggleTheme}>{theme ? <CiDark /> : <CiLight />}</button>
    </nav>
  );
}
