import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import AnimationArea from '../AnimationArea/AnimationArea';
import Anime from 'animejs';
import styles from './styles.module.scss';

const Animation09 = () => {

  const runAnimation = () => {
    reset();

    Anime({
      targets: '#whiteDot',
      duration: 1500,
      easing: 'linear',
      keyframes: [
        {
          translateY: -25,
        },
        {
          translateX: 120,
        },
        {
          translateY: 75,
        },
        {
          translateX: -30
        },
        {
          translateY: -20
        },
        {
          translateX: 0
        },
        {
          translateY: 0,
        }
      ]
    });
  };

  const reset = () => {
    document.getElementById('whiteDot').style = '';
    document.getElementById('whiteI').style = '';
    document.getElementById('whiteN1').style = '';
    document.getElementById('whiteN2').style = '';
    document.getElementById('orangeDot').style = '';
    document.getElementById('orangeI').style = '';
    document.getElementById('orangeT').style = '';
  };

  return (
    <Container title='Animasjon 9' keywords={['Playground']}>
      <AnimationArea height={200}>
        <div className={styles.imageContainer}>
          <div className={`${styles.whiteDot} ${styles.imageElement} animated-element`} id='whiteDot'/>
          <div className={`${styles.whiteI} ${styles.imageElement} animated-element`} id='whiteI'/>
          <div className={`${styles.whiteN1} ${styles.imageElement} animated-element`} id='whiteN1'/>
          <div className={`${styles.whiteN2} ${styles.imageElement} animated-element`} id='whiteN2'/>
          <div className={`${styles.orangeDot} ${styles.imageElement} animated-element`} id='orangeDot'/>
          <div className={`${styles.orangeI} ${styles.imageElement} animated-element`} id='orangeI'/>
          <div className={`${styles.orangeT} ${styles.imageElement} animated-element`} id='orangeT'/>
        </div>
      </AnimationArea>
      <Button btnText='Start' clickHandler={ runAnimation }/>
    </Container>
  )
};

export default Animation09;
