import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { NavigationContainer } from '@react-navigation/native';
import {Feather} from "@expo/vector-icons"
import MyList from "../pages/MyList";
import Discovery from "../pages/Discovery";
import NewAnimes from "../pages/NewAnimes";
const {Navigator, Screen} = createBottomTabNavigator();

export default function AppRoutes(){
    return (
        <NavigationContainer>
        <Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarInactiveTintColor: "rgba(255, 255, 255, .8)",
            tabBarActiveTintColor: "#ffbe63"
          })}>
        <Screen name="Home" component={Home} 
        options={{
            tabBarIcon: () => {
                return <Feather name="home" size={25} color="rgba(255, 255, 255, .8)"/>
                
            },
            tabBarStyle: {
                backgroundColor: '#181829',
                borderTopColor: 'rgba(255, 255, 255, .8)'
              },
              
        }}  />
        <Screen name="Minha Lista" component={MyList} options={{
            tabBarIcon: () => {
                return <Feather name="bookmark" size={25} color="rgba(255, 255, 255, .8)"/>
            },
            tabBarStyle: {
                backgroundColor: '#181829',
                borderTopColor: 'white'
              }
        }}/>
        <Screen name="Descobrir" component={Discovery} options={{
            tabBarIcon: () => {
                return <Feather name="book" size={28} color="rgba(255, 255, 255, .8)"/>
            },
            tabBarStyle: {
                backgroundColor: '#181829',
                borderTopColor: 'white'
              }
        }}/>
                <Screen name="Lancamentos" component={NewAnimes} options={{
            tabBarIcon: () => {
                return <Feather name="star" size={25} color="rgba(255, 255, 255, .8)"/>
            },
            tabBarStyle: {
                backgroundColor: '#181829',
                borderTopColor: 'white'
              }
        }}/>
        <Screen name="Perfil" component={Profile} options={{
            tabBarIcon: () => {
                return <Feather name="user" size={25} color="rgba(255, 255, 255, .8)"/>
            },
            tabBarStyle: {
                backgroundColor: '#181829',
                borderTopColor: 'white'
              }
        }}/>
        
      </Navigator>
      </NavigationContainer>
    )

}