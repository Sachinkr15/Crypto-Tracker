
import axios from 'axios';
import { COIN_GECKO_API_BASE_URL } from './Constant';

const axiosInstance = axios.create({
  baseURL: COIN_GECKO_API_BASE_URL,  // Base URL for CoinGecko API   

});

export default axiosInstance;