// Pode ser algum servidor executando localmente: 
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/minha-vacina-api"
});

export default api;