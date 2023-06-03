import React from 'react';

export default function Project() {
  return (
    <div className='project'>
      <a href='/'>
        <div className='project_hover'></div>
        <img
          src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          alt=''
          className='project_img'
        />
        <div className='project_text type'>
          <span className='text-gradient'>UI/UX Design</span>
        </div>
        <div className='project_text title'>
          <span>Project Title</span>
        </div>
      </a>
    </div>
  );
}
