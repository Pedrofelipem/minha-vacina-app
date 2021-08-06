import * as React from 'react';
import { View, Text } from 'react-native';
import api from '../../services/api';


export interface LoginScreenProps {
}
api.get("/municipios/13")
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));

export function LoginScreen (props: LoginScreenProps) {
    return (
      <View>
         <Text>LoginScreen</Text>
      </View>
    );
}
