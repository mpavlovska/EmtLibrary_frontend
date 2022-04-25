import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://emtlibrarybackend.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default instance;