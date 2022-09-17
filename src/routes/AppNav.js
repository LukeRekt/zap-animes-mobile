import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import AppRoutes from './app.routes';
import { AuthContext } from '../context/AuthContext';
export default function AppNav() {
  const {isLoading, userToken} = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true}/>
      <NavigationContainer>
      <AppRoutes/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
