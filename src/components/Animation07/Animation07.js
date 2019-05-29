import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import AnimationArea from '../AnimationArea/AnimationArea';
import Anime from 'animejs';
import styles from './styles.module.scss';

const Animation07 = () => {

  const runAnimation = () => {
    reset();

    Anime({
      targets: '#star',
      keyframes: [
        {
          scale: 0.1,
          easing: 'linear',
          duration: 2000,
        },
        {
          scale: 2.5,
          easing: 'easeOutExpo',
          duration: 500
        },
        {
          scale: 0,
          easing: 'easeOutExpo',
          duration: 500
        }
      ],
    });
  };

  const reset = () => {
    document.getElementById('star').style = '';
  };

  return (
    <Container title='Animasjon 7' keywords={['Keyframes']}>
      <AnimationArea height={200}>
        <div className={styles.starContainer}>
          <i className="far fa-star" id='star'></i>
        </div>
      </AnimationArea>
      <Button btnText='Start' clickHandler={ runAnimation }/>
    </Container>
  )
};

export default Animation07;
