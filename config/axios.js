import axios from 'axios'

const public_key = '6c32183497883f97e66394e7917db4a8'
const hash = '270485159111dce00c765910fea603f3'
const base_params = {
  limit: 30,
  ts: 1,
  apikey: public_key,
  hash: hash,
}

const axiosFetch = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
});


export const axiosComics = ({params} = {}) => {
  return axiosFetch('comics', { params: {...base_params, ...params} });
}

export const axiosCharacters = ({params} = {}) => {
  return axiosFetch('characters', { params: {...base_params, ...params} });
}