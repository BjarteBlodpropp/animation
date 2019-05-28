import React from 'react';
import styles from './styles.module.scss';

const AnimationArea = ({children, height, width}) => (
  <div className={styles.animationArea}
       style={
         {
           height: height ? height + 'px' : '100%',
           width: width ? width + 'px' : '100%'
         }
       }
  >
    { children }
  </div>
);

export default AnimationArea;
