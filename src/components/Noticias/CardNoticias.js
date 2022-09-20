import React, { useContext, useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";


export default function CardNoticias(){
  

    return (   
                <View style={styles.container}>
                    <Text style={styles.tituloNoticia}>TITULO DA NOTICIA</Text>
               <Text style={styles.texto}>WORK IN PROGRESSWORK IN PROGRESSWORK IN PROGRESS
               WORK IN PROGRESSWORK IN PROGRESS
               WORK IN PROGRESSWORK IN PROGRESS
               WORK IN PROGRESSWORK IWORK IN PROGRESSN PROGRESS
               WORK IN PROGRESSWORK IN PROGRESS
               WORK IN PROGRESSWORK IN PROGRESS
               WORK IN PROGRESSWORK WORK IN PROGRESSIN PROGRESS
               WORK IN PROGRESSWORK IN PROGRESS
               WORK IN PROGRESSWORK IN PROGRESS
               WORK IN PROGRESSWORK IN PROGRESS
               WORK IN PROGRESSWORK IN PROGRESS
               WORK IN PROGRESSWORK IN PROGRESS
               WORK IN PROGRESSWORK IN... 
               </Text> 
               <TouchableOpacity style={styles.botaoLerMais}>
                <Text style={styles.botaoLerMaisTexto}>COTINUAR LENDO</Text>
                </TouchableOpacity>
                </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#181829",
        width: "98%",
        height: 210,
        marginTop: 5,
        borderRadius: 5,
        borderWidth:1,
        borderColor: "rgba(255,255,255,.08)",
        flexDirection: "column"
    },
    tituloNoticia:{
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: "rgba(255,255,255,.04)",
        color: "white",
        marginLeft: 10,
    },
    texto:{
        color: "red",
        fontSize: 11,
        marginLeft: 10,
        marginTop: 10,

        
    },
    botaoLerMais:{
       alignSelf: "flex-end" ,
       marginTop: 5,
    },
    botaoLerMaisTexto:{
        color: "black",
        backgroundColor: "#ffbe63",
        textAlign: "center",
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    }
   
})