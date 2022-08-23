import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import MyList from "../pages/MyList";
import NewAnimes from "../pages/NewAnimes";
import Discovery from "../pages/Discovery";
import Profile from "../pages/Profile";
import PageAnime from "../pages/PageAnime";
import PageEpisode from "../pages/PageEpisode";
import Header from "../components/Header";



const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: "#191828",
        },
        headerTintColor: 'white',
        headerTitle: () => <Header/>
      })}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="AnimeScreen" component={PageAnime} />
      <Stack.Screen name="AnimeEpisodeScreen" component={PageEpisode} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
const ListStackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
        <Stack.Screen name="MinhaListaScreen" component={MyList} />
      </Stack.Navigator>
    );
  }
  const DiscoveryStackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
        <Stack.Screen name="DescobrirScreen" component={Discovery} />
      </Stack.Navigator>
    );
  }
  const NewAnimeStackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
        <Stack.Screen name="LancamentosScreen" component={NewAnimes} />
      </Stack.Navigator>
    );
  }
  const ProfileStackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
        <Stack.Screen name="PerfilScreen" component={Profile} />
      </Stack.Navigator>
    );
  }

export { MainStackNavigator, ListStackNavigator, DiscoveryStackNavigator, NewAnimeStackNavigator, ProfileStackNavigator };