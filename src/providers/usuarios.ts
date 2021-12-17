import { api } from "./api";
import { Usuario } from "../models/usuario";
import { Token } from "../models/token";
import { TokenLogin } from "../models/tokenLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  ObterUsuarioLogado: async (): Promise<Usuario> => {
    let token: string = await AsyncStorage.getItem("token");

    const tokenLogin: TokenLogin = { tipo: "Bearer ", token };

    api.defaults.headers.common = { Authorization: `Bearer ${token}` };
    const { data } = await api.post<Usuario>(
      "/usuarios/pelo-token",
      tokenLogin
    );
    return data;
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
