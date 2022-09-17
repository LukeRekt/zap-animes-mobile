import React, { useContext, useState } from "react";
import { View,Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";



export default function LoginForm(){
    const {login, logout, userInfo, isLogged} = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    return (
        
        <View style={styles.container}>
             <Text style={styles.textoLogin}>LOGIN</Text>
             
            <View style={styles.loginForm}>
            <TextInput
            style={styles.input}
            placeholderTextColor="white"
        label={'Email'}
        placeholder={'Email'}
        value={email}
        onChangeText={(text => setEmail(text))}
      />
      <TextInput 
      style={styles.input}
      placeholderTextColor="white" 
        label={'Senha'}
        secureTextEntry={true}
        placeholder={'Senha'}
        value={senha}
        onChangeText={(text => setSenha(text))}
      />
     <TouchableOpacity style={styles.containerReset}>
     <Text style={styles.textoResetSenha}>Esqueceu sua Senha?</Text>
     </TouchableOpacity>
     
      <TouchableOpacity onPress={() => {login(email, senha)}}
      style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>
        LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.textoRegistro}>Registrar-se</Text>
      </TouchableOpacity>
      
            </View>

        
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:"#151538",
        height:"100%",

    },
    textoLogin:{
        color: "#ffbe63",
        textAlign: "center",
        fontSize: 40,
        marginBottom: 40,
        marginTop: 100,
    },  
    loginForm:{
        // backgroundColor: "#181829",
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    texto:{
        color: "white",
        fontSize: 20,
        textAlign: "center"
    },
    input:{
        color: "white",
        width: "95%",
        marginBottom: 10,
        padding: 10,
        borderRadius: 30,
        backgroundColor: "#2a2a3d"
    },
    containerReset:{
        width: "100%"
    },
    textoResetSenha:{
        color: "white",
        textAlign: "right",
        marginRight: 10,
    },
    botaoContainer:{
        justifyContent: "center",
        alignItems: "center",
       marginTop: 30,
       width: "100%",
      
    },
    botaoTexto:{
        color:"black",
        backgroundColor: "#ffbe63",
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        width: "90%",
        borderRadius: 20,
        textAlign: "center"
    },
    textoRegistro:{
        color: "#ffae3d",
        textAlign: "center",
        marginTop: 10,
    },
    tinyLogo:{
        width:200,
        height:300,
    }
})