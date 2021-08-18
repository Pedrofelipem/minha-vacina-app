import { Usuario } from "../models/usuario";
import {api}  from "./api";

export const UsuariosProviders = {

    //Cadastro de Usuários
    Cadastar: (usuario:Usuario) =>{
        api.post('/usuarios', usuario)
    },

    //Editando dados do Usuário
    Editar: (usuario:Usuario) => {
        api.put('/usuarios/'+ usuario.id, usuario)
    }

}

