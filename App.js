import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/routes/app.routes';
import { MainStackNavigator } from './src/routes/CustomNavigation';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true}/>
      <NavigationContainer>
      <AppRoutes/>
      {/* <MainStackNavigator/> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
