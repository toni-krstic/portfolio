import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { AppWrap } from '../wrapper';
import { images } from '../constants';
import styles from '../style';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
};

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1.2, 0.4]); 

  return (
    <div className={`flex justify-center ${styles.header}`}>
      <div className={styles.headerInfo}>
          <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className='mx-auto'
          >
            <motion.div style={{ scale }} className={`${styles.flexCenter} md:mt-[4rem] w-[70px] h-[70px] lg:w-[110px] lg:h-[110px] 2xl:w-[160px] 2xl:h-[160px] mx-auto rounded-[50%] bg-secondary shadow-[0_0px_20px_0px_rgba(0,195,154,0.3)]`}>
              <img src={images.solidity} alt="circle" className='w-3/5 h-3/5' />
            </motion.div>
          </motion.div>

          <motion.div 
            whileInView={{ y: [-200, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className={`${styles.title}`}
          >

            <h1 className={`mt-[2rem] text-4xl md:text-5xl capitalize text-center xs:text-left font-extrabold 2xl:text-7xl `}>Building modern Web expirences</h1>
            <p className={`text-sm text-center xs:text-left text-[#B9BABE] leading-6 2xl:text-2xl mt-4`}>Hi I'm Toni web developer and blockchain developer</p>
            <a className={styles.portfolioBtn}  href={`#projects`}>Portfolio</a>
          </motion.div>
      </div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='flex justify-start xl:items-end xl:h-full '
      >
        <motion.div style={{ scale }} className={`${styles.flexCenter} sm:mt-0  xs:mb-[2rem] md:mb-0 xl:mb-[10rem] mr-[10rem] w-[90px] h-[90px] lg:w-[140px] lg:h-[140px] 2xl:w-[210px] 2xl:h-[210px] mx-auto rounded-[50%] bg-secondary shadow-[0_0px_20px_0px_rgba(0,195,154,0.3)]`}>
          <img src={images.react} alt="circle" className='w-3/5 h-3/5' />
        </motion.div>
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.headerCircles}
      >
        {[images.html5, images.nextjs, images.tailwind].map((circle, index) => (
          <motion.div style={{ scale }} key={`circle-${index}`} className={`${styles.flexCenter} w-[100px] h-[100px] m-[1rem] rounded-[50%] bg-secondary shadow-[0_0px_20px_0px_rgba(0,195,154,0.3)] even:m-[1.75rem] even:w-[150px] even:h-[150px] last-of-type:w-[70px] last-of-type:h-[70px] lg:m-0 lg:w-[150px] lg:h-[150px] lg:even:w-[250px] lg:even:h-[250px] lg:last-of-type:h-[120px] lg:last-of-type:w-[120px] 2xl:w-[200px] 2xl:h-[200px] 2xl:even:w-[400px] 2xl:even:h-[400px] 2xl:even:m-[4rem] 2xl:last-of-type:h-[170px] 2xl:last-of-type:w-[170px]`}>
            <img src={circle} alt="circle" className='w-3/5 h-3/5' />
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}

export default AppWrap(Header, 'home');