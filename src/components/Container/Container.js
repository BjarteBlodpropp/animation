import React from 'react';
import styles from './styles.module.scss';

const Container = ({children, title, keywords}) => {
  return (
    <div className={styles.outerContainer}>
      <h3 className={styles.title}>{ title ? title : '' }</h3>
      <div className={styles.innerContainer}>
        { keywords ? (
          <div className={styles.keywords}>
            <ul>
              { keywords.map((keyword, key) => ( <li key={key}>{ keyword }</li>))}
            </ul>
          </div>
        ) : ''}
        { children }
      </div>
    </div>
  );
};

export default Container;
