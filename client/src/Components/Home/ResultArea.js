import React from 'react';
import Card from '../UI/Card';
import styles from './ResultArea.module.css';

const ResultArea = (props) => {
  const [cardInfo, setCardInfo] = React.useState(null);
  let data = JSON.parse(props.data);

  /*async function cardClicked() {
    await props.setOpenModal(true);
    console.log(props.openModal);
    setCardInfo(hero);
    //console.log(idCard);
  }*/

  return (
    <div className={styles.result}>
      {props.data &&
        data.map((hero, count) => {
          return (
            <Card
              key={count}
              data-heroId={hero.id}
              img={hero.thumbnail.path + '.' + hero.thumbnail.extension}
              heroName={hero.name}
              onClick={
                /*cardClicked*/ async () => {
                  await props.setOpenModal(true);
                  console.log(props.openModal);
                  await setCardInfo(hero);
                  console.log(cardInfo);
                }
              }
            />
          );
        })}
    </div>
  );
};

export default ResultArea;
