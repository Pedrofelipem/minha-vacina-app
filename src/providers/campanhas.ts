import {api}  from "./api";

export const CampanhasProviders = {

    //Listando todas as Campanhas 
    Listar: async () => {
        const {data} = await api.get('/campanhas')
        return (data)
    }

}