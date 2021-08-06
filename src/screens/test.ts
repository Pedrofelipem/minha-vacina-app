import api from '../services/api';


api.get("/municipios/13")
    .then((response: { data: any; }) => console.log(response.data))
    .catch((err: any) => console.log(err));
