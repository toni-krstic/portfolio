import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../constants';
import  styles  from '../style';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <img src={images.logo} alt="logo" className='w-[60px] h-[30px] lg:ml-[4rem] 2xl:w-[120px] 2xl:h-[60px]' />
        </div>
        <ul className={styles.navbarLinks}>
          {['home', 'projects', 'skills', 'contact'].map(item => (
            <li className={`${styles.flexCenter} ${styles.pText} my-0 mx-[1.5rem] cursor-pointer flex-col before:content-[''] before:block before:w-[5px] before:h-[5px] before:bg-transparent before:rounded-[50%] before:mb-[5px] 2xl:before:w-[7px] 2xl:before:h-[7px] hover:before:bg-primAccent focus:before:bg-primAccent`} key={`link-${item}`}>
              <a href={`#${item}`} className='no-underline flex-col capitalize font-medium transition-all ease-in-out duration-300 hover:text-[#B9BABE] focus:text-[#B9BABE]' >{item}</a>
            </li>
          ))}
        </ul>

        <div className={styles.navbarMenuContainer}>
            <HiMenuAlt4 onClick={() => setToggle(true)} className='h-[70%] w-[70%] bg-primAccent cursor-pointer' fill='black' />
            { toggle && (
              <motion.div
                whileInView={{ x: [300, 0]}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={styles.navbarMenu}
              >
                <HiX onClick={() => setToggle(false)} className='h-[35px] w-[35px] my-[0.5rem] mx-[1rem] cursor-pointer' fill='#00C39A'/>
                <ul className={styles.navbarMenuLinks}>
                  {['home', 'projects', 'skills', 'contact'].map(item => (
                    <li key={item} className='m-[1rem]'>
                      <a href={`#${item}`} onClick={() => setToggle(false)} className='no-underline uppercase font-medium transition-all ease-in-out duration-300 hover:text-secondary focus:text-secondary'>{item}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
        </div>
    </nav>
  );
}

export default Navbar;