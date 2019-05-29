import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import AnimationArea from '../AnimationArea/AnimationArea';
import Anime from 'animejs';
import styles from './styles.module.scss';

const Animation06 = () => {

  const runAnimation = () => {
    reset();

    const timeline = Anime.timeline({
      easing: 'easeInExpo',
    });

    timeline.add({
      targets: '#football',
      translateX: 200,
      rotateZ: '1000deg',
      duration: 1000
    }).add({
      targets: '#hammer',
      rotateZ: ['-36deg', '45deg'],
      duration: 1000
    }).add({
      targets: '#happy',
      opacity: 0,
      duration: 100
    }).add({
      targets: '#dead',
      opacity: 1,
      duration: 100
    })

  };

  const reset = () => {
    document.getElementById('football').style = '';
    document.getElementById('hammer').style = '';
    document.getElementById('happy').style = '';
    document.getElementById('dead').style = '';
  };

  return (
    <Container title='Animasjon 6' keywords={['Timeline']}>
      <AnimationArea height={200}>
        <span className={styles.fotball}>
          <i className="far fa-futbol" id='football'></i>
        </span>
        <span className={styles.hammer}>
          <i className="fas fa-hammer" id='hammer'></i>
        </span>
        <span className={styles.happy}>
          <i className="far fa-grin-alt" id='happy'></i>
        </span>
        <span className={styles.dead}>
          <i className="far fa-dizzy" id='dead'></i>
        </span>
      </AnimationArea>
      <Button btnText='Start' clickHandler={ runAnimation }/>
    </Container>
  )
};

export default Animation06;
