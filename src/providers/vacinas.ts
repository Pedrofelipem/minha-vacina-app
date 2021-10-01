import { usuarioAutenticado } from "./api";

export const VacinasProviders = {
  //Listando vacinas
  Listar: async () => {
    const api = await usuarioAutenticado();
    const { data } = await api.get("/vacinas");
    return data;
  },
};
