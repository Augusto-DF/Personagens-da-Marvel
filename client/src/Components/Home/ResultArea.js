import React from 'react';
import Card from '../UI/Card';
import HeroDetails from './HeroDetails';
import styles from './ResultArea.module.css';

const ResultArea = (props) => {
  const data = JSON.parse(props.data);
  return (
    <div className={styles.result}>
      {props.selectedCardInfo && (
        <HeroDetails dataHero={props.selectedCardInfo} />
      )}
      {props.data &&
        !props.cardSelected &&
        data.map((hero, count) => {
          return (
            <Card
              key={count}
              img={hero.thumbnail.path + '.' + hero.thumbnail.extension}
              heroName={hero.name}
              onClick={() => {
                props.setSelectedCardInfo(hero);
                props.setCardSelected(true);
              }}
            />
          );
        })}
    </div>
  );
};

export default ResultArea;
