import React from 'react';
import { Link } from 'react-scroll';

import {
  BsHouse,
  BsPerson,
  BsFileEarmarkBarGraph,
  BsBriefcase,
  BsChatRightText,
} from 'react-icons/bs';

const menuItems = [
  { to: 'home', title: 'home', icon: <BsHouse /> },
  { to: 'about', title: 'about', icon: <BsPerson /> },
  { to: 'skills', title: 'skills', icon: <BsFileEarmarkBarGraph /> },
  { to: 'work', title: 'work', icon: <BsBriefcase /> },
  { to: 'contact', title: 'contact', icon: <BsChatRightText /> },
];

const socialItems = [
  { to: 'https://github.com/heysunny612', title: 'home', icon: 'Github' },
  {
    to: 'https://blog.naver.com/heysunny0612',
    title: 'about me',
    icon: 'Blog',
  },
  { to: 'about', title: 'about me', icon: 'Email' },
  { to: 'about', title: 'about me', icon: 'CV' },
];

export default function Nav({ location }) {
  const isRight = location === 'right';
  return (
    <nav className={`side_nav ${location}`}>
      <ul className='side_nav_items'>
        {isRight &&
          menuItems.map(({ to, icon, title }, idx) => (
            <li key={idx} className='side_nav_item'>
              <Link to={to} activeClass='active' smooth={true} spy={true}>
                {icon}
                <span className='title'>{title}</span>
              </Link>
            </li>
          ))}
        {isRight ||
          socialItems.map(({ to, icon }, idx) => (
            <li key={idx} className='side_nav_item'>
              <a href={to} target='_blank' rel='noreferrer'>
                {icon}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
