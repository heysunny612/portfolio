import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import fadeIn from '../utils/fadeIn';
import Button from '../components/Button';

const services = [
  {
    name: 'HTML/CSS',
    description:
      'HTML로 웹 표준을 고려한 시맨틱 마크업 가능  \n WCAG의 웹 접근성 4대 원칙을 알고 이를 고려하여 웹서비스를 설게하고자함',
    link: 'Read more',
  },
  {
    name: 'JAVA SCRIPT',
    description:
      '동작원리와 ES6 문법에 대한 이해를 기반으로 JavaScript 코드 작성가능 \n 블라블라블라 ',
    link: 'Read more',
  },
  {
    name: 'REACT',
    description: '컴포넌트 어쩌구 저쩌구 저쩌구 그래프로 변경예정',
    link: 'Read more',
  },
];

export default function Services() {
  return (
    <section className='main_section' id='skills'>
      <div className='common_inner'>
        <div className='skills_content'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='skills_info'
          >
            <h2 className='common_h2'>What I Can Do</h2>
            <p className='desc'>
              HTML로 웹 표준을 고려한 시맨틱 마크업 가능 WCAG의 웹 접근성 4대
              원칙을 알고 이를 고려하여 웹서비스를 설게하고자함 HTML로 웹 표준을
              고려한 시맨틱 마크업 가능 WCAG의 웹 접근성 4대 원칙을 알고 이를
              고려하여 웹서비스를 설게하고자함 HTML로 웹 표준을 고려한 시맨틱
              마크업 가능 WCAG의 웹 접근성 4대 원칙을 알고 이를 고려하여
              웹서비스를 설게하고자함
            </p>
            <div className='common_buttons'>
              <Button>See my work</Button>
              <a href='/' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
          <motion.div
            className='skills_graph'
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              {services.map(({ name, description, link }, index) => {
                return (
                  <div
                    key={index}
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-semibold mb-6'>
                        {name}
                      </h4>
                      <p
                        className='leading-tight'
                        style={{ whiteSpace: 'pre-wrap' }}
                      >
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='/'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='/' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
