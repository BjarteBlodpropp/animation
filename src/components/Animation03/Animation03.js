import React, { useState } from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import AnimationArea from '../AnimationArea/AnimationArea';
import Anime from 'animejs';
import styles from './styles.module.scss';

const Animation03 = () => {
  const [loopAnimation, setLoopAnimation] = useState(true);

  const runAnimation = () => {
    reset();
    setLoopAnimation(!loopAnimation);

    Anime({
      targets: '#animation03',
      scale: 2,
      loop: loopAnimation,
      duration: 900
    });
  };

  const reset = () => {
    document.getElementById('animation03').style = '';
    Anime.remove('#animation03');
  };

  return (
    <Container title='Animasjon 3' keywords={['Loop']}>
      <AnimationArea height={100}>
        <div className={styles.heartContainer}>
        <i className='far fa-heart'
           id='animation03'
        />
        </div>
      </AnimationArea>
      <Button btnText={ loopAnimation ? 'Start' : 'Stopp'} clickHandler={ runAnimation }/>
    </Container>
  )
};

export default Animation03;
