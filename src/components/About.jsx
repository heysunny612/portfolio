import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import fadeIn from '../utils/fadeIn';
import Button from '../components/Button';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className='common_section main_about' id='about' ref={ref}>
      <div className='common_inner'>
        <div className='about_content'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className='about_img'
          >
            <img src='/assets/about.jpg' alt='' />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className='about_info'
          >
            <h2 className='common_h2'>About me</h2>
            <h3 className='common_h3'>뭐든 해내고 싶은 프론트엔드 개발자!</h3>
            <p>
              3년 동안 퍼블리셔로 근무해왔으며, 어쩌고 저쩌고 경험에서 쌓인
              어쩌고 저쩌고 매년 새로운 것들이 나오고 매년 브라우저,
              라이브러리등이 업데이트 되는 것 처럼 현실에 안주하지 않고
              그것들에게 지지 않는 개발자 어쩌고저쩌고 저쩌고
            </p>
            <ul className='about_count'>
              <li>
                <p className='text-gradient number'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  k+
                </p>
                <p className='desc'>
                  Years of <br /> Experience
                </p>
              </li>
              <li>
                <p className='text-gradient number'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </p>
                <p className='desc'>
                  Projects <br /> Completed
                </p>
              </li>
              <li>
                <p className='text-gradient number'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </p>
                <p className='desc'>
                  Satisfied <br /> Clients
                </p>
              </li>
            </ul>
            <div className='common_buttons'>
              <Button accent>View more</Button>
              <Button>My portfolio</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
