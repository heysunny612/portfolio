import { motion } from 'framer-motion';
import React from 'react';
import fadeIn from '../utils/fadeIn';
import Button from '../components/Button';
import Project from '../components/Project';

export default function Work() {
  return (
    <section className='common_section' id='work'>
      <div className='common_inner'>
        <div className='work_content'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className='work_info'
          >
            <div className='work_text'>
              <h2 className='common_h2'>
                My Latest <br />
                Work
              </h2>
              <p className='text'>
                부트캠프를 하는 지난 6개월 동안 많은 프로젝트를 하진 못했지만,
                최대한 다양하게 많은 dev tools 을 사용하려고 노력하였고 조금
                부족하더라도 완성하는데에 중점을 두었습니다. 보다 멋있는 말
                블라블라 부트캠프를 하는 지난 6개월 동안 많은 프로젝트를 하진
              </p>
              <Button>View All Projects</Button>
            </div>
            <Project />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className='work_info'
          >
            <Project />
            <Project />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
