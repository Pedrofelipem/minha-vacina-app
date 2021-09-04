import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {
  CardAnimationContext,
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { LoginScreen } from "../screens/login/login";
import { CadastroScreen } from "../screens/cadastro/cadastro";
import { HomeScreen } from "../screens/home/home";
import { DetalheScreen } from "../screens/detalhe/detalhe";


const Stack = createStackNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="app"
    > 
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="cadastro" component={CadastroScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="detalhe" component={DetalheScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
