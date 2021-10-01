import { Usuario } from "../models/usuario";
import { Token } from "../models/token";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "./api";

export const UsuariosProviders = {
  //Cadastrando de Usuário
  Cadastar: (usuario: Usuario) => {
    api.post("/usuarios", usuario);
  },

  //Atenticando Usuário
  Logar: (email, senha): Promise<boolean> => {
    return api
      .post<Token>("/usuarios/login", { email, senha })
      .then((response) => {
        AsyncStorage.setItem("token", response.data.token);
        return true;
      })
      .catch((error) => {
        return false;
      });
  },
  //Removendo Token
  Logout: () => {
    AsyncStorage.removeItem("token");
  },
  //Editando dados do Usuário
  Editar: (usuario: Usuario) => {
    api.put("/usuarios/" + usuario.id, usuario);
  },
};
