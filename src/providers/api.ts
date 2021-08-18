import Axios from 'axios';

// Api minha vacina
export const api = Axios.create({
    baseURL: 'http://192.168.0.11:8080/minha-vacina-api'
})

