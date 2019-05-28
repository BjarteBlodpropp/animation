import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Anime from 'animejs';

const Button = ({ clickHandler, btnText }) => {

  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);

  const localClickHandler = (event) => {
    event.preventDefault();
    const target = event.currentTarget.firstChild;
    setxPos(event.pageX - event.currentTarget.offsetLeft);
    setyPos(event.pageY - event.currentTarget.offsetTop);

    // remove animation and clear styles before starting new animation
    Anime.remove(target);

    target.style.display = 'inline-block';

    Anime({
      targets: target,
      scale: [0, 80],
      opacity: [1, 0],
      duration: 1000,
      easing: 'easeOutSine',
    }).finished.then(() => {
      target.style.display = "none";
    });

    clickHandler();
  };

  return (
    <button
      className={styles.button}
      onClick={ event => localClickHandler(event) }
    >
      <span className={styles.rippleEffect} style={{ left: xPos, top: yPos }}/>
      { btnText }
    </button>
  )
};


Button.defaultProps = {
  btnText: 'Click me!',
  clickHandler: () => {},
};

Button.propTypes = {
  btnText: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Button;
