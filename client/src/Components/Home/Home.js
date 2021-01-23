import React from 'react';
import Input from './../UI/Input';
import ResultArea from './ResultArea';
import { findChar, listChars } from './../../Api/api';
import styles from './Home.module.css';
import Button from '../UI/Button';
const Home = () => {
  const [data, setData] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [cardSelected, setCardSelected] = React.useState(false);
  const [selectedCardInfo, setSelectedCardInfo] = React.useState(null);
  const [nameChar, setNameChar] = React.useState('');
  const [dataChar, setDataChar] = React.useState(false);

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
      setDataChar(false);
      return setCurrentPage(currentPage);
    }
  }

  function onChange(event) {
    setNameChar(event.target.value);
  }

  async function findByName() {
    let result = await findChar(nameChar);
    setDataChar(JSON.stringify([result]));
    console.log(JSON.parse(dataChar));
  }

  return (
    <section>
      <div className={styles.container}>
        <div>
          <Input
            onChange={onChange}
            label="Nome do Personagem"
            input="pesonagem"
            placeholder="Insira o nome do personagem aqui"
          />
          <Button nameButton="Pesquisar" onClick={findByName} />
        </div>

        <div>
          <ResultArea
            data={dataChar ? dataChar : data}
            cardSelected={cardSelected}
            setCardSelected={setCardSelected}
            selectedCardInfo={selectedCardInfo}
            setSelectedCardInfo={setSelectedCardInfo}
          />
        </div>
        <Button nameButton="< Back" onClick={backPage} />
        <Button nameButton="Next >" onClick={nextPage} />
      </div>
    </section>
  );
};

export default Home;
