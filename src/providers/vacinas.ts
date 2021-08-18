import {api}  from "./api";

export const VacinasProviders = {

    //Listando todas as vacinas 
    Listar: async () => {
        const {data} = await api.get('/vacinas')
        return(data)
    }

}