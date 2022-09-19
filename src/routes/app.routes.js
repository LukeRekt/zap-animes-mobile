import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import Profile from "../pages/Profile";

import {Feather} from "@expo/vector-icons"
import MyList from "../pages/MyList";
import Discovery from "../pages/Discovery";
import NewAnimes from "../pages/NewAnimes";
import { createStackNavigator } from "@react-navigation/stack";
import {ContactStackNavigator, DiscoveryStackNavigator, ListStackNavigator, MainStackNavigator, NewAnimeStackNavigator, PrimeiraTelaTeste, ProfileStackNavigator} from "./CustomNavigation";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
// const {Navigator, Screen} = createBottomTabNavigator();


const Tab = createBottomTabNavigator();
export default function AppRoutes(){
    const setTabBarVisibility = route => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
        if(routeName == "AnimeEpisodeScreen"){
            return "none"
        }
     }

    return (
        
        <Tab.Navigator
        screenOptions={({ route }) => ({
                 headerShown: false,
                 tabBarInactiveTintColor: "rgba(255, 255, 255, .8)",
                 tabBarActiveTintColor: "#ffbe63",
                 tabBarActiveBackgroundColor: "#26243d",
                 
               })}>
        <Tab.Screen name="Home" component={MainStackNavigator} 
        options={({route}) =>({
            tabBarIcon: () => {
                return <Feather name="home" size={25} color="rgba(255, 255, 255, .8)"/>
                
            },
            tabBarStyle: {
                backgroundColor: '#181829',
                borderTopColor: 'rgba(255, 255, 255, .8)',
                display: setTabBarVisibility(route)
              },
              
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "bold",
            }
              
        })}/>
        <Tab.Screen name="Minha Lista" component={ListStackNavigator} 
        options={{
            tabBarIcon: () => {
                return <Feather name="bookmark" size={25} color="rgba(255, 255, 255, .8)"/>
            },
            tabBarStyle: {
                backgroundColor: '#181829',
                borderTopColor: 'white'
              },
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "bold",
            }
        }}/>
                <Tab.Screen name="Descobrir" component={DiscoveryStackNavigator} 
        options={{
            tabBarIcon: () => {
                return <Feather style={{padding: 10, position: "absolute", borderRadius: 50, borderWidth: 1, borderBottomWidth: 0, borderColor: "rgba(255, 255, 255, .4)", backgroundColor: "#181829"}} name="book" size={35} color="rgba(255, 255, 255, .8)"/>
            },
            tabBarStyle: {
                backgroundColor: '#181829',
                borderTopColor: 'white'
              },
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "bold",
            }
        }}/>
                <Tab.Screen name="Lancamentos" component={NewAnimeStackNavigator} 
        options={{
            tabBarIcon: () => {
                return <Feather name="star" size={28} color="rgba(255, 255, 255, .8)"/>
            },
            tabBarStyle: {
                backgroundColor: '#181829',
                borderTopColor: 'white'
              },
              tabBarLabelStyle: {
                fontSize: 11,
                fontWeight: "bold",
            }
        }}/>
                <Tab.Screen name="Perfil" component={ProfileStackNavigator} 
        options={{
            tabBarIcon: () => {
                return <Feather name="user" size={25} color="rgba(255, 255, 255, .8)"/>
            },
            tabBarStyle: {
                backgroundColor: '#181829',
                borderTopColor: 'white'
              },
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "bold",
            }
        }}/>
      </Tab.Navigator>
         )





        }

        // <Navigator
        
        // screenOptions={({ route }) => ({
        //     headerShown: false,
        //     tabBarInactiveTintColor: "rgba(255, 255, 255, .8)",
        //     tabBarActiveTintColor: "#ffbe63"
        //   })}>
            
        /* <Screen name="Home" component={Home} 
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
        }}/> */
        
    //   </Navigator>

    
      
 