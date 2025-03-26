import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}

