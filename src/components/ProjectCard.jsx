import React from 'react';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';

export default function ProjectCard({ project, left }) {
  const { title, text, techList, links, imgUrl } = project;
  return (
    <li className='project_list'>
      {left || getImage(title, links, imgUrl)}
      <div className={`project_info ${left ? 'left' : ''}`}>
        <h3 className='project_title'>
          <span className='light_em'>Featured Project</span>
          <b className='common_txt_light'>{title}</b>
        </h3>
        <div className='project_desc'>{text}</div>
        <ul className='project-tech'>
          {techList.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className='project_link'>
          <a href='/'>
            <BsGithub />
          </a>
          <a href='/'>
            <BsLink45Deg />
          </a>
        </div>
      </div>
      {left && getImage(title, links, imgUrl)}
    </li>
  );
}

function getImage(title, links, imgUrl) {
  return (
    <div className='project_img'>
      <a href={links[1]} target='_blank' rel='noreferrer'>
        <div className='project_hover'></div>
        <img src={imgUrl} alt={title} />
      </a>
    </div>
  );
}
