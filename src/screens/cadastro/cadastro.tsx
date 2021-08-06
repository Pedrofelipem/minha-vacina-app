import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Input} from "react-native-elements";
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";

export interface CadastroScreenProps {}

export function CadastroScreen(props: CadastroScreenProps) {

  const cadastrar = async (dados: any) => {
    await new Promise(r => setTimeout(() => r(''), 3000))
    nav.navigate('app');
}
  const [erro, setErro] = React.useState("");
  const nav = useNavigation();

  return (
    <View>
      <StatusBar />
      <View>
        {/*Reader*/}
        <Text>Cadastro</Text>
      </View>
      <Picker>
        <Picker.Item/>
        <Picker.Item/>
      </Picker>
      <Formik
        initialValues={{
          nome: "",
          municipio: "",
          dataNascimento: "",
          email: "",
          senha: "",
        }}
        validationSchema={Yup.object().shape({
          nome: Yup.string()
            .required("(Nome obrigatório)")
            .min(5, "(Nome completo)")
            .max(25, "(Máximo 25 caracteres)"),
          municipio: Yup.string()
            .required("(Seleção obrigatória)"),
          dataNascimento: Yup.string()
            .required("(data nascimento obrigatório)")
            .min(8, "(Mínimo 8 caracteres)"),
          email: Yup.string()
            .required("(Email obrigatório)")
            .email("(Email inválido)")
            .max(30, "(Máximo 30 caracteres)"),
          senha: Yup.string()
            .required("(Senha obrigatória)")
            .min(8, "(Mínimo 8 caracteres)")
            .max(20, "(Máximo 20 caracteres)"),
        })}
        onSubmit={cadastrar}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          isSubmitting,
          touched,
          handleBlur,
        }) =>(
          <View>

              <Input
                
                placeholder="Digite seu nome"
                autoCorrect={false}
                onChangeText={handleChange("nome")}
              />
              {touched.nome && <Text >{errors.nome}</Text>}
              <Input
                
                secureTextEntry={true}
                placeholder="Selecione seu municipio"
                autoCorrect={false}
                onChangeText={handleChange("municipio")}
              />
              {touched.municipio && <Text >{errors.municipio}</Text>}
              <Input
                
                placeholder="Digite sua data de nacimento"
                autoCorrect={false}
                onChangeText={handleChange("dataNascimento")}
              />
              {touched.dataNascimento && <Text >{errors.dataNascimento}</Text>}
              <Input
                
                placeholder="Digite seu e-mail"
                autoCorrect={false}
                onChangeText={handleChange("email")}
              />
              {touched.email && <Text >{errors.email}</Text>}
              <Input
                
                placeholder="Digite sua senha"
                autoCorrect={false}
                onChangeText={handleChange("senha")}
              />
              {touched.senha && <Text>{errors.senha}</Text>}
              {isSubmitting && <ActivityIndicator size={30} color="white" />}
              {!isSubmitting && (
                <Button
                  title="Criar conta"
                  onPress={() => handleSubmit()}
                  buttonStyle={{ borderRadius: 7, width: 365, padding: 13, }}
                  raised={true}
                />
              )}
              <TouchableOpacity
                onPress={() => nav.navigate("login")}
              >
                <Text>Já tenho uma conta!</Text>
              </TouchableOpacity>
            </View>
        )}
      </Formik>

    </View>
  );
}
