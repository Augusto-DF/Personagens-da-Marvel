# Personagens-da-Marvel

<h2 align='center'><a  href='https://quirky-hodgkin-8c5beb.netlify.app/'>Acesse a demonstração aqui.</h2>

## 📖 Sobre

#### O **Personagens-da-Marvel** é uma plataforma que consome a API da Marvel. Foi criada como projeto pessoal para testar minhas habilidades.

---

</br>

## ⚙ Funcionamento

O projeto consiste em consultas a API. Buscando, a principio, os dados de todos os personagens da Marvel e dispondo-os na interface da pagina principal em forma de card. Ao clicar em algum desses cards, o usuário é levado para uma visão detalhada do personagem escolhido, onde é visto sua descrição e quadrinhos o qual ele participou. É possível também buscar certo personagem pelo seu nome, através do breve formulário ao topo da tela inicial.

---

</br>

## 💡 Soluções adotadas

O projeto é simples, a área onde é carregado os dados dos persongem tambem é carregado o conteúdo da busca pelo nome e do detalhamento do personagem. Sempre que o usuário passa a página é feita uma nova requisição à api, passando o parametro que define onde foi que o programa parou na ultima requisição, fazendo com que os novos dados não sejam iguais ao anterior. A parte da busca eu diria que é a mais complicada: Como a api não dá a possibilidade de buscar um personagem por nome, apenas por id, e existia um limite de quantos personagem a api poderia me passar a cada requisição ( limite de 100 ) foi necessário que: sempre que uma busca era inciada, essa busca era feita em blocos ( procura nos primeiros 100 não achou? vai pros proximos 100 até encontrar ).

---

</br>

## 💾 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)

---

</br>

## 📁 Como baixar o projeto

```bash

    #Clona o repositório
    $ git clone https://github.com/Augusto-DF/ProjetoSegfy

    #Navega até o repositório
    $ cd ProjetoSegfy

    #Instala as dependencias
    $ npm install

    #Inicia o projeto
    $ npm start
```
