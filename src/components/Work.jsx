import { motion } from 'framer-motion';
import React from 'react';
import fadeIn from '../utils/fadeIn';

export default function Work() {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gpa-x-12 gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className='flex-1 flex flex-col gap-y-11  mb-10 lg:mb-0'
          >
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                voluptatibus, rem voluptatem minima, iure doloribus commodi
                atque ipsam ab nihil maiores qui dolorem, repellat eum labore
                fuga obcaecati harum quia!
              </p>
              <button className='btn btn-sm'>View All Projects</button>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                alt=''
                className='group-hover:scale-125 transition-all duration-500'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className='flex-1 flex flex-col gap-y-10'
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                alt=''
                className='group-hover:scale-125 transition-all duration-500'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                alt=''
                className='group-hover:scale-125 transition-all duration-500'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
