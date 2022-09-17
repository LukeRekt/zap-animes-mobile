import React, { useContext } from "react";
import { View,Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";



export default function LoginForm(){
    const {login, logout, userInfo, isLogged} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <View style={styles.loginForm}>
            <Text style={styles.texto}>TELA DE LOGIN</Text>
            <TextInput
            style={styles.input}
            placeholderTextColor="white"
        label={'Email'}
        placeholder={'Digite seu email'}
      />
      <TextInput 
      style={styles.input}
      placeholderTextColor="white" 
        label={'Senha'}
        placeholder={'Digite sua senha'}
      />
      
      <TouchableOpacity onPress={() => {login("lucasrsl12@gmail.com", "Macacoazul2010@")}}
      style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>
        LOGIN
        </Text>
      </TouchableOpacity>
            </View>

        
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#151538",
        height:"100%"
    },
    loginForm:{
        backgroundColor: "#181829",
        width:"90%"
    },
    texto:{
        color: "white",
        fontSize: 20,
        textAlign: "center"
    },
    input:{
        color: "white",
        borderColor: "grey",
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
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
})