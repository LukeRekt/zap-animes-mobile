import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/routes/app.routes';
import { MainStackNavigator } from './src/routes/CustomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider} from './src/context/AuthContext';
import { useContext } from 'react';
import AppNav from './src/routes/AppNav';
export default function App() {

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
