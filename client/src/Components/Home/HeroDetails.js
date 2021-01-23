import React from 'react';
import { listComicsByCharId } from '../../Api/api';
import styles from './HeroDetails.module.css';

const HeroDetails = (props) => {
  const hero = props.dataHero;
  const [dataComics, setDataComics] = React.useState(false);

  React.useEffect(async () => {
    let comics = await listComicsByCharId(hero.id, 5);
    setDataComics(comics.data.results);
  }, [hero]);

  return (
    <div className={styles.externWrpper}>
      <div className={styles.bannerChar}>
        <img
          src={hero.thumbnail.path + '.' + hero.thumbnail.extension}
          alt={hero.name}
        />
      </div>
      <div className={styles.charInfos}>
        <p>Nome do personagem: {hero.name}</p>
        <p>
          Descrição:
          {hero.description
            ? ' ' + hero.description
            : ' Não há descrição sobre o personagem.'}
        </p>
      </div>
      {dataComics && (
        <div className={styles.comicsContainer}>
          <h3>Lista de Quadrinhos: </h3>
          <div className={styles.comicList}>
            {dataComics.length > 0 ? (
              dataComics.map((comic) => {
                return (
                  <div key={comic.id} className={styles.comic}>
                    <img
                      src={
                        comic.images.length > 0 &&
                        comic.images[0].path + '.' + comic.images[0].extension
                      }
                      alt={comic.title}
                    />
                    <p>{comic.title}</p>
                  </div>
                );
              })
            ) : (
              <span>
                Algo deu errado, não foi possível encontrar as hqs de referência
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroDetails;
