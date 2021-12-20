import axios from 'axios'

const public_key = '6c32183497883f97e66394e7917db4a8'
const hash = '270485159111dce00c765910fea603f3'

const axiosFetch = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/comics?limit=20&ts=1&apikey=${public_key}&hash=${hash}`,
});

export default axiosFetch;

// title=${search}&