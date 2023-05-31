import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import fadeIn from '../utils/fadeIn';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section bg-bg' id='about' ref={ref}>
      <div className='common_inner'>
        <div className='main_section flex flex-col gap-y-10 gap-x-10 lg:flex-row lg:items-center'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className='flex-1 bg-black bg-contain bg-no-repeat h-96 bg-center'
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
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
            </h3>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              deleniti culpa eos tempore deserunt voluptas illum voluptatem
              saepe, ad delectus? Nostrum totam sapiente molestiae officiis
              ipsam tempora quasi laudantium iure.
            </p>
            <div className='flex gap-x-6 lg:gap-s-10 mb-12'>
              <div>
                <div className='text-[40px] text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  k+
                </div>
                <div className='text-sm tracking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className='text-sm tracking-[2px]'>
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='text-sm tracking-[2px]'>
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
