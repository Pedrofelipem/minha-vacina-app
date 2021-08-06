import api from './src/services/api';

api.get("/municipios/13")
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));