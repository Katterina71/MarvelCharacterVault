
import CryptoJS from 'crypto-js';

const publicKey = import.meta.env.VITE_API_KEY_PUBLIC;
const privateKey = import.meta.env.VITE_API_KEY_PRIVATE;



export function generateMarvelApiUrl(endpoint, limit = 100, offset = 0) {
  const ts = new Date().getTime().toString(); // Current timestamp
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
  const url = `http://gateway.marvel.com/v1/public/${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;
  return url;
}