import React, { useState } from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import AnimationArea from '../AnimationArea/AnimationArea';
import Anime from 'animejs';
import styles from './styles.module.scss';

const Animation05 = () => {

  const [cubicBezierCurve, setCubicBezierCurve] = useState('cubicBezier(.5, .05, .1, .3)');

  const runAnimation = () => {
    reset();

    Anime({
      targets: '#car3',
      translateX: 250,
      skewX: ['30deg', 0],
      //skewX: [0, '30deg', 0],
      easing: cubicBezierCurve,
    });
  };

  const handleInput = (event) => {
    const { value } = event.target;
    setCubicBezierCurve(`cubicBezier${value}`);
  };

  const reset = () => {
    document.getElementById('car3').style = '';
  };

  return (
    <Container title='Animasjon 5' keywords={['Cubic Bezier', 'https://matthewlein.com/tools/ceaser', '[start, end]']}>
      <AnimationArea height={100}>
        <div>
          <input type='text' onChange={(event) => handleInput(event)} placeholder='(.5, .05, .1, .3)' />
        </div>
        <div className={styles.car1Container}>
          <i className='fas fa-car-side' id='car3'/>
        </div>
      </AnimationArea>
      <Button btnText='Start' clickHandler={ runAnimation }/>
    </Container>
  )
};

export default Animation05;
