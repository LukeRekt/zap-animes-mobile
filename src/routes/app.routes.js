import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { NavigationContainer } from '@react-navigation/native';
import {Feather} from "@expo/vector-icons"
const {Navigator, Screen} = createBottomTabNavigator();

export default function AppRoutes(){
    return (
        <NavigationContainer>
        <Navigator>
        <Screen name="Home" component={Home} 
        options={{
            tabBarIcon: () => {
                return <Feather name="home" size={25} color="#000"/>
            }
        }}  />
        <Screen name="Perfil" component={Profile} options={{
            tabBarIcon: () => {
                return <Feather name="user" size={25} color="#000"/>
            }
        }}/>
        
      </Navigator>
      </NavigationContainer>
    )

}