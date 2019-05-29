import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import AnimationArea from '../AnimationArea/AnimationArea';
import Anime from 'animejs';
import styles from './styles.module.scss';

const Animation08 = () => {

  const runAnimation = () => {
    reset();

    Anime({
      targets: '.animatedCircle',
      rotateY: (el, index) => {
        return ((index+1) * 180) + 'deg';
      },
      delay: (el, index) => {
        return index * 200;
      },
      duration: 2500
    });
  };

  const reset = () => {
    let circles = document.getElementsByClassName('animatedCircle');
    for(let i = 0; i < circles.length; i++) {
      circles[i].style = '';
    }
  };

  return (
    <Container title='Animasjon 8' keywords={['Multiple elements and functions', 'Delay']}>
      <AnimationArea height={200}>
        <div className={styles.circleContainer}>
          <span className={styles.circle}>
            <i className="far fa-circle animatedCircle"></i>
          </span>
          <span className={styles.circle}>
            <i className="far fa-circle animatedCircle"></i>
          </span>
          <span className={styles.circle}>
            <i className="far fa-circle animatedCircle"></i>
          </span>
          <span className={styles.circle}>
            <i className="far fa-circle animatedCircle"></i>
          </span>
          <span className={styles.circle}>
            <i className="far fa-circle animatedCircle"></i>
          </span>
        </div>
      </AnimationArea>
      <Button btnText='Start' clickHandler={ runAnimation }/>
    </Container>
  )
};

export default Animation08;
