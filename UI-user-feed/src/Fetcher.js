import axios from 'axios'

const Fetcher = axios.create({
  baseURL: 'http://127.0.0.1:4001/'
});

export default Fetcher;