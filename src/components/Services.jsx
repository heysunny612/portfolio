import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import fadeIn from '../utils/fadeIn';

const services = [
  {
    name: 'UI/UX Design',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga iusto non velit id obcaecati nulla  Quos dolore minima eveniet tempora.',
    link: 'Learn more',
  },
  {
    name: 'Something',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga iusto non velit id obcaecati nulla.  Quos dolore minima eveniet tempora.',
    link: 'Learn more',
  },
  {
    name: 'Something',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga iusto non velit id obcaecati nulla. Quos dolore minima eveniet tempora.',
    link: 'Learn more',
  },
  {
    name: 'Something',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga iusto non velit id obcaecati nulla. Quos dolore minima eveniet tempora.',
    link: 'Learn more',
  },
];

export default function Services() {
  return (
    <section className='section' id='skills'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-8'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat bg-contain mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Can Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              nesciunt commodi obcaecati consequatur reprehenderit iste ut
              suscipit accusamus nam dolor? Ullam assumenda eaque inventore
              minima velit eum excepturi quasi laboriosam.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          <motion.div
            className='flex-1'
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
                      <p className='leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
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
