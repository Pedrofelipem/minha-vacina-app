import { usuarioAutenticado } from "./api";

export const CampanhasProviders = {
  //Listando Campanhas
  Listar: async () => {
    const api = await usuarioAutenticado();
    const { data } = await api.get("/campanhas");
    return data;
  },
};
