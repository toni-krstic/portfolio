import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../wrapper';
import { urlFor, client } from '../client';
import styles from '../style';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query)
      .then((data) => {
        setProjects(data);
        setFilterProject(data);
      })
  }, [])

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if(item === 'All'){
        setFilterProject(projects);
      }else{
        setFilterProject(projects.filter(project => project.tags.includes(item)));
      }
    }, 500);

  }

  return (
    <>
       <h2 className={`mt-[1rem] ${styles.headText}`}>Check out my <span className='text-primAccent'>Projects</span></h2>

       {/* <div className={styles.projectFilter}>
          {['Solidity', 'Next JS', 'React JS', 'Tailwind', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleProjectFilter(item)}
              className={`${styles.projectFilterItem} ${styles.flexCenter} ${styles.pText} ${activeFilter === item ? styles.itemActive : ''}`}
            >
              {item}
            </div>
          ))}
       </div> */}

       <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className={styles.projectPortfolio}
       >
        {filterProject.map((project, index) => (
          <a href={project.projectLink} target="_blank" rel="noreferrer">
          <div className={`${styles.projectItem} ${styles.flexCenter}`} key={index}>
            <div className={`${styles.projectImg} ${styles.flexCenter}`}>
              <img src={urlFor(project.imgUrl)} alt={project.name} className='w-full h-full rounded-[0.5rem] object-cover'/>

              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className={`${styles.projectHover} ${styles.flexCenter}`}
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{ duration: 0.25}}
                    className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[50%] bg-[rgba(0,0,0,0.5)] text-primary m-[1rem] font-extrabold cursor-pointer transition-all ease-in duration-300`} 
                  >
                    <AiFillEye className='h-1/2 w-1/2' fill='white'/>
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{ duration: 0.25}}
                    className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[50%] bg-[rgba(0,0,0,0.5)] text-primary m-[1rem] font-extrabold cursor-pointer transition-all ease-in duration-300`} 
                  >
                    <AiFillGithub className='h-1/2 w-1/2' fill='white'/>
                  </motion.div>
                </a>
              </motion.div>

            </div>

            <div className={`${styles.projectContent} ${styles.flexCenter}`}>
              <h4 className={`${styles.boldText} mt-[1rem] text-left w-full leading-6 2xl:mt-[3rem]`}>{project.title}</h4>
              <p className={`${styles.pText} mt-[10px] text-[#B9BABE] text-left font-extralight w-full leading-4`}>{project.description}</p>

              <div className={`${styles.projectTag} ${styles.flexCenter}`}>
                <p className={`${styles.pText} text-[#B9BABE]`}>{project.tags[0]}</p>
              </div>
            </div>

          </div>
          </a>
        ))}
       </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Projects, 'flex-1 w-full flex-col bg-transparent'),
  'projects');