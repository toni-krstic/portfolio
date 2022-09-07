import React from 'react';
import { motion } from 'framer-motion';

import styles from '../style';

const MotionWrap = (Component, ClassNames) => function HOC() {
  return (
    <motion.div
        whileInView={{ y: [200, 150, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${ClassNames} ${styles.flexCenter}`}
    >
        <Component />
    </motion.div>
  );
}

export default MotionWrap;