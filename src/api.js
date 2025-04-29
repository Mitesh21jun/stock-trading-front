import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const createTrade = (data) => API.post('/trade', data);
export const getTrades = () => API.get('/trade');
export const getLots = () => API.get('/lot');
export const getSummary = () => API.get('/trade/getStockSummary');
