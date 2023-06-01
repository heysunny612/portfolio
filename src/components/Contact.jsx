import React from 'react';
import { motion } from 'framer-motion';
import fadeIn from '../utils/fadeIn';
import Button from '../components/Button';

export default function Contact() {
  return (
    <section className='main_section' id='contact'>
      <div className='common_inner'>
        <div className='contact_content'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className='contact_text'
          >
            <h2 className='common_h2'>Get In Touch</h2>
            <p className='text'>
              Let`s work <br /> together!
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className='contact_form'
          >
            <form>
              <input
                className='contact_input'
                type='text'
                placeholder='Your email'
              />
              <input
                className='contact_input'
                type='text'
                placeholder='Your name'
              />
              <textarea
                className='contact_textarea  py-12  resize-none mb-12'
                placeholder='Your message'
                rows={4}
              ></textarea>
              <Button>Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
