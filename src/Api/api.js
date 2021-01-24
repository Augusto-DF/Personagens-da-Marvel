import CryptoJS from 'crypto-js';

var timestamp = new Date().getTime();
const publicKey = 'a6e211518cd2bb6a0c04355eb705682c';
const privateKey = '544ca8af816a130b36185ee09060b79a88e97465';
const ts = timestamp; //'greatgreatgreatstring';
const URL = 'https://gateway.marvel.com';
const hash = CryptoJS.MD5(ts + privateKey + publicKey);
const limit = 20;

function LIST_CHARS(page = 0) {
  const offset = 20 * page; //passo de 20 max 74
  return {
    url:
      URL +
      '/v1/public/characters?ts=' +
      ts +
      '&apikey=' +
      publicKey +
      '&hash=' +
      hash +
      '&limit=' +
      limit +
      '&offset=' +
      offset,
    options: {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    },
  };
}

export async function listChars(page) {
  const { url, options } = LIST_CHARS(page);
  const response = await fetch(url, options);
  const json = await response.json();
  //console.log(json);
  return json;
}

function LIST_COMICS_BY_CHAR_ID(charId, limit = 20, page = 0) {
  const offset = 20 * page; //passo de 20 max 74
  return {
    url:
      URL +
      '/v1/public/characters/' +
      charId +
      '/comics?ts=' +
      ts +
      '&apikey=' +
      publicKey +
      '&hash=' +
      hash +
      '&limit=' +
      limit +
      '&offset=' +
      offset +
      '&format=comic',
    options: {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    },
  };
}

export async function listComicsByCharId(charId, page = 0) {
  const { url, options } = LIST_COMICS_BY_CHAR_ID(charId, page);
  const response = await fetch(url, options);
  const json = await response.json();
  //console.log(json);
  return json;
}

function FIND_CHAR(page = 0) {
  const offset = 100 * page; //passo de 20 max 74
  let lim = 100;
  return {
    url:
      URL +
      '/v1/public/characters?ts=' +
      ts +
      '&apikey=' +
      publicKey +
      '&hash=' +
      hash +
      '&limit=' +
      lim +
      '&offset=' +
      offset,
    options: {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    },
  };
}

export async function findChar(nameChar) {
  const { url, options } = FIND_CHAR();
  const response = await fetch(url, options);
  const json = await response.json();

  let charTarget = null;
  let max = (json.data.total - (json.data.total % 100)) / 100 + 1;
  let count = 0;

  while (count <= max && charTarget === null) {
    const { url, options } = FIND_CHAR(count);
    const response = await fetch(url, options);
    const json = await response.json();
    let dataList = json.data.results;

    dataList.map((target) => {
      if (target.name.toUpperCase() === nameChar.toUpperCase())
        charTarget = target;
    });
    count++;
  }

  return charTarget;
}
