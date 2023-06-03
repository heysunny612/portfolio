import React from 'react';
import { NavLink } from 'react-router-dom';
import { CiDark, CiLight } from 'react-icons/ci';
import { useThemeContext } from '../../context/ThemeContext';

const menuItems = [
  { id: 1, to: '/', title: 'Home' },
  { id: 2, to: 'about', title: 'About' },
  { id: 3, to: 'work', title: 'Work' },
  { id: 4, to: 'blog', title: 'Blog' },
  { id: 5, to: 'switter', title: 'switter' },
];

export default function Nav() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav className='nav'>
      <ul className='nav_items'>
        {menuItems.map(({ id, to, title }) => (
          <li key={id}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>0{id}.</span>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className='btn_theme' onClick={toggleTheme}>
        {theme ? <CiDark /> : <CiLight />}
      </button>
    </nav>
  );
}
