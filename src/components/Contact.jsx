import React, { useState } from 'react';
import { motion } from 'framer-motion';
import fadeIn from '../utils/fadeIn';
import Button from '../components/Button';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setSending] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [texts, setTexts] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTexts((product) => ({ ...product, [name]: value }));
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess('성공적으로 전송되었습니다. 감사합니다.');
          setTimeout(() => {
            setSuccess('');
          }, 3000);
        },
        (error) => {
          setError(error);
        }
      )
      .finally(() => {
        setSending(false);
        setTexts({});
      });
  };
  return (
    <section className='common_section' id='contact'>
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
            <form ref={form} onSubmit={sendEmail}>
              <input
                className='contact_input'
                type='email'
                value={'To: heysunny612@gmail.com'}
                readOnly
              />
              <input
                className='contact_input'
                type='email'
                placeholder='Your email'
                name='user_email'
                required
                value={texts.user_email ?? ''}
                onChange={handleChange}
              />
              <input
                className='contact_input'
                type='text'
                placeholder='Your name'
                name='user_name'
                required
                value={texts.user_name ?? ''}
                onChange={handleChange}
              />
              <textarea
                className='contact_textarea  py-12  resize-none mb-12'
                placeholder='Your message'
                rows={4}
                name='message'
                value={texts.message ?? ''}
                onChange={handleChange}
              ></textarea>
              <Button accent>Send Message</Button>
            </form>
            {isSending && <p className='common_accent'>메일 전송중...</p>}
            {success && <p className='common_accent'>{success}</p>}
            {error && (
              <p className='common_accent'>{error} 전송되지 않았습니다.</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
