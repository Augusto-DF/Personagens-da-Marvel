import React from 'react';
import Input from './../UI/Input';
import ResultArea from './ResultArea';
import { listChars } from './../../Api/api';
import styles from './Home.module.css';
import Button from '../UI/Button';
const Home = () => {
  const [data, setData] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(async () => {
    let result = await listChars(currentPage);
    setData(JSON.stringify(result.data.results));
  }, [currentPage]);

  function nextPage() {
    if (currentPage < 74) return setCurrentPage(currentPage + 1);
  }

  function backPage() {
    if (currentPage > 0) return setCurrentPage(currentPage - 1);
  }

  return (
    <section>
      <div className={styles.container}>
        <Input
          label="Nome do Personagem"
          input="pesonagem"
          placeholder="Insira o nome do personagem aqui"
        />
        <div>
          <ResultArea
            data={data}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>
        <Button nameButton="< Back" onClick={backPage} />
        <Button nameButton="Next >" onClick={nextPage} />
      </div>
    </section>
  );
};

export default Home;
