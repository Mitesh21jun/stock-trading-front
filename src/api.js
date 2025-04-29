import axios from 'axios';

const API = axios.create({ baseURL: 'http://3.110.165.127:5000/api' });

export const createTrade = (data) => API.post('/trade', data);
export const getTrades = () => API.get('/trade');
export const getLots = () => API.get('/lot');
export const getSummary = () => API.get('/trade/getStockSummary');
