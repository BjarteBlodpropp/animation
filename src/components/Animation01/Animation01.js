import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import AnimationArea from '../AnimationArea/AnimationArea';
import Anime from 'animejs';
import styles from './styles.module.scss';

const Animation01 = () => {

  const runAnimation = () => {
    reset();
    Anime({
      targets: '#animation01',
      translateX: 200,
    });
  };

  const reset = () => {
    document.getElementById('animation01').style = '';
  };

  return (
    <Container title='Animasjon 1' keywords={['Targets', 'TranslateX']}>
      <AnimationArea>
        <div
          id='animation01'
          className={styles.animation01}
          />
      </AnimationArea>
      <Button btnText='Start' clickHandler={ runAnimation }/>
    </Container>
  )
};

export default Animation01;
