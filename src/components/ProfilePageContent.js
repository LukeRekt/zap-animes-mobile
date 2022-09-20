import React, { useContext } from "react";
import { View,Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image } from "react-native";
import LoginForm from "../components/LoginForm";
import { AuthContext } from "../context/AuthContext";
import { REACT_APP_API_URL } from "../utils/config";
import { Entypo } from '@expo/vector-icons';
import UserProfile from "./Perfil/UserPofile";
import UserWatched from "./Perfil/UserWatched";
import SwipeTabs from "./Perfil/SwipeTabs";


export default function ProfilePageContent(){
    const {logout, userInfo, isLogged} = useContext(AuthContext);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.scrollContainer}>
                <UserProfile/>
                <UserWatched/>
                <SwipeTabs/>
            </View>
        </ScrollView>
    //         </View>)}
    )

}

const styles = StyleSheet.create({
    container:{
        height:"100%",

    },
    scrollContainer:{
       width: "100%",
       justifyContent: "center",
       alignItems: "center",
    },

})