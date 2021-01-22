import React from 'react';
import styles from './Button.module.css';
const Button = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.nameButton}
    </button>
  );
};

export default Button;
