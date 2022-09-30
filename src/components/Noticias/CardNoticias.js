import React, { useContext, useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


export default function CardNoticias(){


  const navigation = useNavigation();

  const dados = {
    imagem: `https://www.intoxianime.com/wp-content/uploads/2022/09/cs-6-980x450.jpg`,
    titulo: "Urusei Yatsura – Remake da autora de InuYasha ganha trailer com OP e ED",
    descricao: ` O site oficial da adaptação em anime de Urusei Yatsura liberou um novo trailer para a obra.
    O vídeo trás novos detalhes da história e da relação dos protagonistas, além de dar uma prévia da abertura “AIUE” e do encerramento “Tokyo Shandy Rendezvous”, ambos cantados por MAISONdes.
    O anime tem previsão de estreia para o dia 13 de outubro.... `,

  }
    return (   
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate("ReadNewsPageScreen", dados)}>
                    <View style={styles.topoContainer}>
                    <Image style={styles.imagemCard} source={ {uri: `${dados.imagem}`}}/>
                    <Text style={styles.tituloNoticia}>{dados.titulo}</Text>
                    </View>
               <Text style={styles.texto}>
                {dados.descricao}
               </Text> 
               <View style={styles.botaoLerMais}>
                <Text style={styles.botaoLerMaisTexto}>COTINUAR LENDO</Text>
                </View>
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
       position: "absolute",
       bottom: -33,
       right: 10,
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