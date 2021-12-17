import { TokenNotificacao } from "../models/tokenNotificacao";
import { api } from "./api";

export const TokenNotificacaoProvider = {
  salvarToken: (tokenNotificacao: TokenNotificacao) => {
    api.post<TokenNotificacao>("notificacao/token", tokenNotificacao);
  },
};
