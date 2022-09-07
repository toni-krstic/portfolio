import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-vanilla-tilt';

import { AppWrap, MotionWrap } from '../wrapper';
import { urlFor, client } from '../client';
import styles from '../style';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query)
      .then(data => setSkills(data))
  }, [])
  
  return (
    <>
      <h2 className={`mt-[1rem] ${styles.headText}`}>My tech <span className='text-primAccent'>stack</span></h2>

      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <Tilt
            key={skill.title + index}  
            style={{ bacground: 'transparent' }}
          > 
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className={styles.skillItem}
            >
                <img src={urlFor(skill.imgUrl)} alt={skill.title} className='w-full h-[170px] rounded-[15px] p-[1rem] object-contain bg-secondary 2xl:h-[320px]'/>
                <h2 className={`${styles.boldText} mt-[20px]`}>{skill.title}</h2>
                <p className={`${styles.pText} mt-[10px] text-[#B9BABE] font-extralight leading-4`}>{skill.description}</p>
            </motion.div> 
          </Tilt>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'flex-1 w-full flex-col'),
  'skills');