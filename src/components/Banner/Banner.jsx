import React from 'react';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import fadeIn from '../../utils/fadeIn';
import Model from './Avatar';
import Button from '../Button';

const typeAni = [
  '안녕하세요',
  2000,
  'Hi! there',
  2000,
  'Buongiorno',
  2000,
  'Geten Tag!',
  2000,
  'xin chào',
  2000,
  'Bonjour',
  2000,
];
export default function Banner() {
  return (
    <section className='common_section main_banner' id='home'>
      <div className='common_inner'>
        <div className='banner_content'>
          <div className='banner_info'>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='title common_txt_light'
            >
              I'm suyeon
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='greetings'
            >
              <TypeAnimation
                sequence={typeAni}
                speed={50}
                repeat={Infinity}
                className='ani_text'
                wrapper='span'
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='text'
            >
              위에 문장은 제가 여행으로 다녀온 일부나라들의 인사말입니다.
              누군가에게는 익숙하게 다가올 수도 있고 또 누군가에게는 처음보는
              이상한(?) 글이겠지만, 각 나라의 가장{' '}
              <span className='common_accent'>"기본적인"</span> 인사말입니다.
              내가 모를 수도 있는 것, 내게 익숙하지 않은 것들이 개발자에게는
              언제나 일어나는 일상이라고 생각합니다. 알고 나면 별거 아닌 걸수도
              있는 것들을 지나치지 않고, ~~블라블라블라~
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='common_buttons'
            >
              <Button accent>Contact me</Button>
              <Button>Check out my work</Button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView='show'
            className='banner_avatar'
          >
            <Canvas
              camera={{ position: [0, 0, 10], fov: 12 }}
              style={{
                width: '100%',
                height: '90vh',
              }}
            >
              <ambientLight intensity={1.25} />
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.4} />
              <Model position={[0.025, -0.9, 0]} />
              <OrbitControls />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
