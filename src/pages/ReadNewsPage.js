import React from "react";
import { View,Text, ScrollView, Image } from "react-native";


export default function ReadNewsPage(props){
    return (
        <ScrollView style={{backgroundColor: "#151538", height:"100%"}}>
            <View style={{alignItems: "center"}}>
            <Image style={{width: "100%", height: 300}} source={ {uri: `${props.route.params.imagem}`}}/>
            <Text>{props.route.params.titulo}</Text>
            <Text>{props.route.params.descricao}</Text>
            
            </View>
        </ScrollView>
        
    )

}