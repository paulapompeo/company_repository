import axios from 'axios';

//create -> cria uma configiraçao do axios 
const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;