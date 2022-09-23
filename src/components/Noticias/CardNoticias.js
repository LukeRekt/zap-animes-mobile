import React, { useContext, useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";


export default function CardNoticias(){
  

    return (   
                <View style={styles.container}>
                    <View style={styles.topoContainer}>
                    <Image style={styles.imagemCard} source={ {uri: `https://i.insider.com/61d786c637afc20019ac999b?width=700`}}/>
                    <Text style={styles.tituloNoticia}>TITULO DA NOTICIA</Text>
                    </View>
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
        backgroundColor: "#191919",
        width: "100%",
        height: 410,
        marginTop: 10,
        borderWidth:1,
        borderTopColor: "rgba(255,255,255,.08)",
        borderBottomColor: "rgba(255,255,255,.08)",
        flexDirection: "column"
    },
    topoContainer:{
        alignItems: "center"
    },  
    imagemCard:{
        marginTop: 10,
        width: "95%",
        height: 200
    },
    tituloNoticia:{
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: "rgba(255,255,255,.04)",
        color: "white",
        marginTop: 5,
    },
    texto:{
        color: "#ECDBBA",
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
        backgroundColor: "#C84B31",
        textAlign: "center",
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    }
   
})