import React from 'react';
import { Link } from 'react-scroll';
import { AiOutlineHome } from 'react-icons/ai';
import {
  BsHouse,
  BsPerson,
  BsFileEarmarkBarGraph,
  BsBriefcase,
  BsChatRightText,
} from 'react-icons/bs';

const menuItems = [
  { to: 'home', title: 'home', icon: <BsHouse /> },
  { to: 'about', title: 'about me', icon: <BsPerson /> },
  { to: 'skills', title: 'skills', icon: <BsFileEarmarkBarGraph /> },
  { to: 'work', title: 'work', icon: <BsBriefcase /> },
  { to: 'contact', title: 'contact', icon: <BsChatRightText /> },
];

export default function Nav() {
  return (
    <nav className='side_nav'>
      <ul className='side_nav_items'>
        {menuItems.map(({ to, icon }, idx) => (
          <li key={idx} className='side_nav_item'>
            <Link to={to} activeClass='active' smooth={true} spy={true}>
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
