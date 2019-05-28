import React, { useState } from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import AnimationArea from '../AnimationArea/AnimationArea';
import Anime from 'animejs';
import styles from './styles.module.scss';

const EASINGS = [
  'easeInQuad',
  'easeInCubic',
  'easeInQuart',
  'easeInQuint',
  'easeInSine',
  'easeInExpo',
  'easeInCirc',
  'easeInBack',
  'easeOutQuad',
  'easeOutCubic',
  'easeOutQuart',
  'easeOutQuint',
  'easeOutSine',
  'easeOutExpo',
  'easeOutCirc',
  'easeOutBack',
  'easeInOutQuad',
  'easeInOutCubic',
  'easeInOutQuart',
  'easeInOutQuint',
  'easeInOutSine',
  'easeInOutExpo',
  'easeInOutCirc',
  'easeInOutBack',
];

const Animation04 = () => {

  const [car1Easing, setCar1Easing] = useState('linear');
  const [car2Easing, setCar2Easing] = useState('linear');

  const runAnimation = () => {
    reset();

    Anime({
      targets: '#car1',
      translateX: 250,
      easing: car1Easing,
    });

    Anime({
      targets: '#car2',
      translateX: 250,
      easing: car2Easing,
    });
  };
  const handleCar1Change = (event) => {
    const {value} = event.target;
    setCar1Easing(value);
  };
  const handleCar2Change = (event) => {
    const {value} = event.target;
    setCar2Easing(value);
  };

  const reset = () => {
    document.getElementById('car1').style = '';
    document.getElementById('car2').style = '';
  };

  return (
    <Container title='Animasjon 4' keywords={['Easing']}>
      <AnimationArea height={200}>
        <div>
          <select onChange={(event) => handleCar1Change(event)}>
            {
              EASINGS.map(easing => (
              <option key={easing} value={easing}>
                {easing}
              </option>))
            }
          </select>
        </div>
        <div className={styles.car1Container}>
          <i className='fas fa-car-side' id='car1'/>
        </div>
        <div>
          <select onChange={(event) => handleCar2Change(event)}>
            { EASINGS.map(easing => (<option key={easing} value={easing}>{easing}</option>))}
          </select>
        </div>
        <div className={styles.car2Container}>
          <i className='fas fa-car-side' id='car2'/>
        </div>
      </AnimationArea>
      <Button btnText='Start' clickHandler={ runAnimation }/>
    </Container>
  )
};

export default Animation04;
