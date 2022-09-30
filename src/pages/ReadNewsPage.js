import React from "react";
import { View,Text, ScrollView, Image, StyleSheet,  } from "react-native";


export default function ReadNewsPage(props){
    return (
        <ScrollView style={{backgroundColor: "#191919", height:"100%"}}>
            <View style={{alignItems: "center"}}>
            <Image style={{width: "96%", height: 200, marginTop: 10,}} source={ {uri: `${props.route.params.imagem}`}}/>
            <Text style={styles.titulo}>{props.route.params.titulo}</Text>
            <Text style={styles.conteudo}>{props.route.params.descricao}</Text>
            <View style={styles.posterContainer}>
            <Image style={styles.imagemCard} source={ {uri: `http://192.168.0.103:3232/static/imagens/avatars/LukeRekt.jpg`}}/>
            <Text style={styles.posterText}>Postado por ・ LukeRekt</Text>
            </View>
            </View>
        </ScrollView>
        
    )

}

const styles = StyleSheet.create({
    titulo:{
        color: "white",
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        borderBottomColor: "rgba(255, 255, 255, 0.1)",
        borderBottomWidth: 0.3,
    },
    conteudo:{
        color: "white",
        width: "100%",
        marginLeft: 10,
        borderBottomColor: "rgba(255, 255, 255, 0.4)",
        borderBottomWidth: 0.5,
        padding: 5,
     },
     posterContainer: {
        backgroundColor: "#C84B31",
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        marginTop: 30,
     },
     imagemCard:{
        width: 50,
        height: 50,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
     },
     posterText: {
        marginLeft: 40,
     }
});