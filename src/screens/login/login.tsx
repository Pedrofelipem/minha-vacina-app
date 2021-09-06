import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "../../styles/styleLoginCadastro";
import { InputCampo, InputSenha } from "../../components/input";
import { ButtonLogin } from "../login/button";
import { useNavigation } from "@react-navigation/native";
import { ModalSenha } from "../../components/modal";
import { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export interface LoginScreenProps {}

export function LoginScreen(props: LoginScreenProps) {

  async function logar({email, senha}){
  }
  //Estado de selação modal
  const [modalSelecionado, setModalSelecionado] = useState(false)

  const [mostrarSenha, setMostrarSenha] = useState(true)

  const alternar = () => {
    setMostrarSenha(!mostrarSenha)
  }
  
  const nav = useNavigation()

  return (
    <View>
      <StatusBar />
      <View style={styles.logoApp}>
        <Text>Logo Minha Vacina</Text>
      </View>
      <Formik
        initialValues={{
          email: "",
          senha: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required("Campo e-mail obrigatório")
            .email("Email inválido")
            .max(30, "Máximo 30 caracteres"),
          senha: Yup.string()
            .required("Campo senha obrigatório")
            .min(8, "Mínimo 8 caracteres")
            .max(20, "Máximo 20 caracteres"),
        })}
        onSubmit={logar}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          isSubmitting,
          touched,
          handleBlur,
        }) => (
          <View style={styles.conteinerFormLogin}>
            <InputCampo
              placeholder="Digite seu e-mail"
              icone="email"
              tipoTeclado="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => handleBlur("email")}
            />
            {touched.email && <Text style={styles.erro}>{errors.email}</Text>}
            
            <InputSenha
              placeholder="Digite sua senha"
              secureText={mostrarSenha}
              onChangeText={handleChange("senha")}
              onBlur={() => handleBlur("senha")}
            />
            {touched.senha && <Text style={styles.erro}>{errors.senha}</Text>}
            <View style={styles.btnVerSenha}>
              <Switch
                onValueChange={alternar}
                value={mostrarSenha}
                trackColor={{ true: '#12963C', false: '#bbbbbb' }}
                thumbColor={mostrarSenha ? '#12963C' : '#bbbbbb'}
              />
              <Text style={styles.textoExibirsenha}>Exibir senha</Text>
            </View>
            
              <ModalSenha
                titulo="Restaurar senha"
                visivel={modalSelecionado}
                onCancelar={()=> setModalSelecionado(!modalSelecionado)}
              >
                <View>
                  <Text>Será enviado uma nova senha aleatória para seu e-mail.</Text>
                  <InputCampo
                    placeholder="Digite seu e-mail"
                    icone="email"
                    tipoTeclado="email-address"
                    onChangeText={handleChange("email")}
                    onBlur={() => handleBlur("email")}
                  />  
                </View>
              </ModalSenha>
            
            <TouchableOpacity onPress={() => setModalSelecionado(!modalSelecionado)}>
              <Text style={styles.textEsqueceuSenha}>
                Esqueceu sua senha?
              </Text>
            </TouchableOpacity>

            {isSubmitting && (
              <ActivityIndicator
                style={styles.carregando}
                size="small"
                color="white"
              />
            )}
            {!isSubmitting && (
              <ButtonLogin
                titulo="Entrar"
                onPress={() => handleSubmit()}
                estilo={styles.btnLogin}
              />
            )}
            <TouchableOpacity onPress={() => nav.navigate("cadastro")}>
              <Text style={styles.textContaLoginCadastrar}>
                Ainda não possuo uma conta!
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
