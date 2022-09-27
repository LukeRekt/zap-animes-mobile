import React, { useContext, useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import UserInfoSection from "./UserInfoSection";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function UserInfo(){
    const {logout, userInfo, isLogged} = useContext(AuthContext);
  

    return (   
                <View style={styles.userInfo}>
               {/* <Text style={styles.texto}>WORK IN PROGRESS</Text> */}
               <UserInfoSection titulo="Geral">
                <Text style={styles.texto}><AntDesign name="user" size={30} color="rgba(255,255,255,.5)" /> Nome Público: {userInfo.username}</Text>
                <Text style={styles.texto}><FontAwesome5 name="smile" size={30} color="rgba(255,255,255,.5)" /> Apelido: {userInfo.username}</Text>
               </UserInfoSection>
               <UserInfoSection titulo="Dados Pessoais">
                <Text style={styles.texto}><Entypo name="email" size={30} color="rgba(255,255,255,.5)" /> Email: {userInfo.email}</Text>
                <Text style={styles.texto}><AntDesign name="phone" size={30} color="rgba(255,255,255,.5)" /> Número: 99999999</Text>
                <Text style={styles.texto}><Entypo name="cake" size={30} color="rgba(255,255,255,.5)" /> Aniversário: 10/10/2010</Text>
                <Text style={styles.texto}><FontAwesome name="transgender-alt" size={30} color="rgba(255,255,255,.5)" /> Genero: Zap</Text>
               </UserInfoSection>
               <UserInfoSection titulo="Segurança">
                <Text style={styles.texto}><AntDesign name="lock" size={30} color="rgba(255,255,255,.5)" /> Senha: {userInfo.username}</Text>
               </UserInfoSection>
                </View>
    )

}

const styles = StyleSheet.create({
    userInfo:{
        backgroundColor: "#181829",
        width: "95%",
        marginTop: 5,
        borderRadius: 5,
        borderWidth:1,
        borderColor: "rgba(255,255,255,.04)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    texto:{
        color: "rgba(255,255,255,.5)",
        fontSize: 18,
        marginTop: 9,
        borderTopWidth:1,
        paddingVertical: 10,
        borderTopColor: "rgba(255,255,255,.04)",
        borderBottomColor: "rgba(255,255,255,.04)",
    }
   
})