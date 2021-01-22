import CryptoJS from 'crypto-js';

const publicKey = 'a6e211518cd2bb6a0c04355eb705682c';
const privateKey = '544ca8af816a130b36185ee09060b79a88e97465';
const ts = 'greatgreatgreatstring';
const URL = 'http://gateway.marvel.com';
const hash = CryptoJS.MD5(ts + privateKey + publicKey);
const limit = 20;

//Modelo de conexão
export function LIST_CHARS(page = 0) {
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
