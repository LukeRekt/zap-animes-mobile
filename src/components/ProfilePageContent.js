import React, { useContext } from "react";
import { View,Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image } from "react-native";
import LoginForm from "../components/LoginForm";
import { AuthContext } from "../context/AuthContext";
import { REACT_APP_API_URL } from "../utils/config";


export default function ProfilePageContent(){
    const {logout, userInfo, isLogged} = useContext(AuthContext);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.scrollContainer}>
                <View style={styles.userPic}>
                <Image style={styles.banner} source={{ uri: `${REACT_APP_API_URL}/${userInfo.userBanner}`}}/>
                <Image style={styles.imagem} source={{ uri: `${REACT_APP_API_URL}/${userInfo.userAvatar}`}}/>
                <Text style={styles.texto}>{userInfo.username}</Text>
                <Text style={{color: "grey", fontSize:15, marginBottom: 10}}>@{userInfo.username}</Text>
               <View style={styles.textoSeguidoresContainer}>
               <Text style={{color: "rgba(255,255,255,.8)", fontSize:19, marginBottom: 10, marginRight: 9}}>0 Seguindo</Text>
               <Text style={{color: "rgba(255,255,255,.8)", fontSize:19, marginBottom: 10}}>0 Seguidores</Text>
               </View>
                </View>
            
          
           
           <TouchableOpacity onPress={() => {logout()}}
       style={styles.botaoContainer}>
         <Text style={styles.botaoTexto}>
         LOGOUT
         </Text>
       </TouchableOpacity>

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
    userPic:{
        marginTop: 10,
        backgroundColor: "#181829",
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderWidth:1,
        borderColor: "rgba(255,255,255,.04)",
    },
    containerForm:{
        marginTop:"30%"
    },
    texto:{
        color: "white",
        textAlign: "center",
        fontSize: 30
    },
    textoSeguidoresContainer:{
        flexDirection: "row",
        
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
    banner:{
        position: "absolute",
        width: "100%",
        height: 120,
        top: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    imagem:{
        height: 120,
        borderRadius: 100,
        width: "35%",
        borderWidth: 2,
        borderColor: "#ffbe63",
        marginBottom: 5,
        marginTop: 50,

        
        
    },
})