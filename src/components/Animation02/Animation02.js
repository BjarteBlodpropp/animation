import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import AnimationArea from '../AnimationArea/AnimationArea';
import Anime from 'animejs';
import styles from './styles.module.scss';

const Animation02 = () => {

  const runAnimation = () => {
    reset();
    Anime({
      targets: '#animation02',
      scale: 2,
      backgroundColor: '#8e44ad',
      duration: 2000
    });
  };

  const reset = () => {
    document.getElementById('animation02').style = '';
  };

  return (
    <Container title='Animasjon 2' keywords={['Scale', 'Color', 'Duration']}>
      <AnimationArea height={100}>
        <div
          id='animation02'
          className={styles.animation02}
          />
      </AnimationArea>
      <Button btnText='Start' clickHandler={ runAnimation }/>
    </Container>
  )
};

export default Animation02;
