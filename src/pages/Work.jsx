import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import fadeIn from '../utils/fadeIn';

const projects = [
  {
    title: 'Personal Website V2',
    text: ' 애니메이션 구현, 다크모드 적용 act-prarsd 이용한 메인페이지 애니메이션 구현, react-observer를 사용한, 페러럴 스크롤, react-prarsd 이용한 메인페이지 애니메이션 구현, 다크모드 적용 act-prarsd 이용한 메인페이지 애니메이션 구현, 다크모드다크모드 적용',
    techList: ['VS CODE', 'PhotoShop', 'Avatar', 'Firebase'],
    links: ['github', '/'],
    imgUrl: '/assets/test.webp',
  },
  {
    title: 'SUNNY SHOP',
    text: ' react-observer를 사용한, 페러럴 스크롤, react-prarsd 이용한 메인페이지 애니메이션 구현, 다크모드 적용 ',
    techList: ['VS CODE', 'PhotoShop', 'Avatar', 'Cmder'],
    links: ['github', 'url'],
    imgUrl: '/assets/test.webp',
  },
  {
    title: 'MINI Youtube',
    text: ' react-observer를 사용한, 페러럴 스크롤, react-prarsd 이용한 메인페이지 애니메이션 구현, 다크모드 적용 ',
    techList: ['VS CODE', 'PhotoShop', 'Avatar', 'Cmder'],
    links: ['github', 'url'],
    imgUrl: '/assets/test.webp',
  },
];

const others = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 11,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
];

export default function Work() {
  return (
    <div className='common_section'>
      <div className='common_inner project_content'>
        <h2 className='common_page_h2'>
          <span> Projects I`ve Built</span>
        </h2>
        <div>
          <ul>
            {projects.map((project, index) => {
              return <ProjectCard left={index % 2 !== 0} project={project} />;
            })}
          </ul>
        </div>
        <h2 className='common_page_h2'>
          <span> Other Noteworthy Projects</span>
        </h2>
        <ul className='other_projects'>
          {others.map((item, idx) => {
            return (
              <motion.li
                variants={fadeIn('up', 0.1 * idx)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false }}
                key={idx}
              >
                <p>
                  {idx} {item.id}
                </p>
                <img src={item.img} alt='' />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
