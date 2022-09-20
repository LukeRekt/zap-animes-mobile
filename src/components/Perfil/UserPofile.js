import React, { useContext, } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AuthContext } from "../../context/AuthContext";
import { REACT_APP_API_URL } from "../../utils/config";




export default function UserProfile(){
    const {logout, userInfo, isLogged} = useContext(AuthContext);



    
    return (
        
            
                <View style={styles.userPic}>
                    <TouchableOpacity onPress={() => {logout()}} style={styles.logoutIcone}>
                    <Entypo  name="log-out" size={40} color="black" />
                    </TouchableOpacity>
                
                <Image style={styles.banner} source={{ uri: `${REACT_APP_API_URL}/${userInfo.userBanner}`}}/>
                <Image style={styles.imagem} source={{ uri: `${REACT_APP_API_URL}/${userInfo.userAvatar}`}}/>
                <Text style={styles.texto}>{userInfo.username}</Text>
                <Text style={{color: "grey", fontSize:15, marginBottom: 10}}>@{userInfo.username}</Text>
               <View style={styles.textoSeguidoresContainer}>
               <Text style={{color: "rgba(255,255,255,.8)", fontSize:19, marginBottom: 10, marginRight: 9}}>0 Seguindo</Text>
               <Text style={{color: "rgba(255,255,255,.8)", fontSize:19, marginBottom: 10}}>0 Seguidores</Text>
               </View>
                </View>
    )

}

const styles = StyleSheet.create({
    userPic:{
        marginTop: 10,
        backgroundColor: "#181829",
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderWidth:1,
        borderColor: "rgba(255,255,255,.04)",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    logoutIcone:{
        position:"absolute",
        top: 5,
        right: 5,
        zIndex: 2, 
        backgroundColor: "rgba(255,255,255,.1)",
        borderRadius: 4,
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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