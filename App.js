import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/routes/app.routes';
import { MainStackNavigator } from './src/routes/CustomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider} from './src/context/AuthContext';
import { useContext } from 'react';
import AppNav from './src/routes/AppNav';


import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_800ExtraBold,

}from '@expo-google-fonts/open-sans'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_800ExtraBold})
    
    if(!fontsLoaded){
      <AppLoading/>
    }

  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
