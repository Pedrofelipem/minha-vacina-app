import * as React from "react";
import {
  NavigationContainer,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import {
  CardAnimationContext,
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { LoginScreen } from "../screens/login/login";
import { CadastroScreen } from "../screens/cadastro/cadastro";
import { HomeScreen } from "../screens/home/home";
import { DetalheScreen } from "../screens/detalhe/detalhe";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

const Stack = createStackNavigator();
/*
const nav = useNavigation();
const TelaInicial = () => {
  AsyncStorage.getItem("token").then((valor) => {
    if (valor) nav.navigate("home");
    else nav.navigate("login");
  });
  return <View />;
};
*/

export const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*<Stack.Screen name="inicial" component={TelaInicial} />*/}
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="cadastro" component={CadastroScreen} />
      <Stack.Screen name="detalhe" component={DetalheScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
