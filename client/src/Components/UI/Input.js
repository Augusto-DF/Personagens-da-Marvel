import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} name={props.input}>
        {props.label}
      </label>
      <input
        className={styles.input}
        htmlFor={props.input}
        placeholder={props.placeholder}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
