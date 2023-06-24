
import HomeScreen from './screens/HomeScreen';
import * as React from 'react';                
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import store from "./store";
import StackNavigator from './StackNavigator';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
    <Provider store={store}>
    
      <StackNavigator />
     
    </Provider>
     
  </TailwindProvider>
  );
}

