import React from 'react';

import styles from '../style';

const NavigationDots = ({ active }) => {
  return (
    <div className={styles.navigation}>
        {['home', 'projects', 'skills', 'contact'].map((item, index) => (
            <a  
                key={item + index}
                href={`#${item}`}
                className={styles.navigationDot}
                style={active === item ? {backgroundColor: '#00C39A'} : {} }
            />
        ))}
    </div>
  );
}

export default NavigationDots;