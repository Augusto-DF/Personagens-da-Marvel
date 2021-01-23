import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card} onClick={props.onClick}>
      <img src={props.img} alt={props.heroName} />
      <p>{props.heroName}</p>
    </div>
  );
};

export default Card;
