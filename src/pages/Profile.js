import React, { useContext } from "react";
import { View,Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image } from "react-native";
import LoginForm from "../components/LoginForm";
import ProfilePageContent from "../components/ProfilePageContent";
import { AuthContext } from "../context/AuthContext";
import { REACT_APP_API_URL } from "../utils/config";


export default function Profile(){
    const {logout, userInfo, isLogged} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            
            <View style={styles.containerForm}>
           {isLogged == false ? (<LoginForm/>) : (<ProfilePageContent/>)}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#151538",
        height:"100%",
        
    },
    containerForm:{
        marginTop:"0%"
    },
    texto:{
        color: "white",
        textAlign: "center",
        fontSize: 30
    },
    botaoContainer:{
        justifyContent: "center",
        alignItems: "center",
    },
        botaoTexto:{
        color:"black",
        backgroundColor: "white",
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    imagem:{
        height: 350,
        borderRadius: 8,
        width: "95%",
        marginBottom: 10
        
    },
})