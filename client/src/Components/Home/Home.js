import React from 'react';
import ResultArea from './ResultArea';
import { findChar, listChars } from './../../Api/api';
import styles from './Home.module.css';
import Button from '../UI/Button';
import FormFindChar from '../UI/Form/FormFindChar';
const Home = () => {
  const [data, setData] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [cardSelected, setCardSelected] = React.useState(false);
  const [selectedCardInfo, setSelectedCardInfo] = React.useState(null);
  const [nameChar, setNameChar] = React.useState('');
  const [dataChar, setDataChar] = React.useState(null);
  const [load, setLoad] = React.useState(false);

  React.useEffect(async () => {
    let result = await listChars(currentPage);
    setData(JSON.stringify(result.data.results));
  }, [currentPage]);

  function nextPage() {
    const lastPage = 74;
    if (currentPage < lastPage && !cardSelected)
      return setCurrentPage(currentPage + 1);
  }

  function backPage() {
    const firstPage = 0;
    if (currentPage > firstPage && !cardSelected)
      return setCurrentPage(currentPage - 1);
    if (cardSelected || dataChar) {
      setCardSelected(false);
      setSelectedCardInfo(null);
      setDataChar(null);
      return setCurrentPage(currentPage);
    }
  }

  function onChange(event) {
    setNameChar(event.target.value);
  }

  async function findByName(e) {
    e.preventDefault();
    console.log('teste');
    setLoad(true);
    let result = await findChar(nameChar)
      .then((res) => {
        setSelectedCardInfo(null);
        return res;
      })
      .finally(() => {
        setLoad(false);
      });
    setDataChar(JSON.stringify([result]));
  }

  return (
    <section className={styles.bgPage}>
      <div className={styles.container}>
        {!selectedCardInfo ? (
          <div>
            <FormFindChar
              onChange={onChange}
              onSubmit={findByName}
              load={load}
            />
          </div>
        ) : undefined}

        <div>
          <ResultArea
            data={dataChar ? dataChar : data}
            cardSelected={cardSelected}
            setCardSelected={setCardSelected}
            selectedCardInfo={selectedCardInfo}
            setSelectedCardInfo={setSelectedCardInfo}
          />
        </div>
        <div className={styles.buttonsArea}>
          <Button nameButton="Back" onClick={backPage} />
          {!cardSelected && !dataChar ? (
            <Button nameButton="Next" onClick={nextPage} />
          ) : undefined}
        </div>
      </div>
    </section>
  );
};

export default Home;
