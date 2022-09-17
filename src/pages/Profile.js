import React, { useContext } from "react";
import { View,Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image } from "react-native";
import LoginForm from "../components/LoginForm";
import { AuthContext } from "../context/AuthContext";
import { REACT_APP_API_URL } from "../utils/config";


export default function Profile(){
    const {logout, userInfo, isLogged} = useContext(AuthContext);
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.containerForm}>
           {isLogged == false ? (<LoginForm/>) : (
           
               <View> 

               
    <Image style={styles.imagem} source={{ uri: `${REACT_APP_API_URL}/${userInfo.userAvatar}`}}/>
           <Text style={styles.texto}>Logado como: {userInfo.username}</Text>
           
           <TouchableOpacity onPress={() => {logout()}}
       style={styles.botaoContainer}>
         <Text style={styles.botaoTexto}>
         LOGOUT
         </Text>
       </TouchableOpacity>
           
               </View>
           
           
           )}
             
             
            </View>
        </ScrollView>



  

            
    //         </View>)}
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#151538",
        height:"100%",
        
    },
    containerForm:{
        justifyContent: "center",
        marginLeft: "8%",
        marginTop:"50%"
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