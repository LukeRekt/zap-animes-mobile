import React from "react";
import { View,Text, ScrollView, Image, StyleSheet,  } from "react-native";


export default function ReadNewsPage(props){
    return (
        <ScrollView style={{backgroundColor: "#151538", height:"100%"}}>
            <View style={{alignItems: "center"}}>
            <Image style={{width: "100%", height: 300}} source={ {uri: `${props.route.params.imagem}`}}/>
            <Text style={styles.titulo}>{props.route.params.titulo}</Text>
            <Text style={styles.conteudo}>{props.route.params.descricao}</Text>
            
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
     },
});