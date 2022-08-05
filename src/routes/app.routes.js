import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { NavigationContainer } from '@react-navigation/native';

const {Navigator, Screen} = createBottomTabNavigator();

export default function AppRoutes(){
    return (
        <NavigationContainer>
        <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Perfil" component={Profile} />
        
      </Navigator>
      </NavigationContainer>
    )

}