import React from "react";
import { View,Text, ScrollView } from "react-native";
import CardNoticias from "../components/Noticias/CardNoticias";


export default function NewsPage(){
    return (
        <ScrollView style={{backgroundColor: "#151538", height:"100%"}}>
            <View style={{alignItems: "center"}}>
            {alert("Essa pagina ainda esta em desenvolvimento, tudo visto aqui esta sujeito a alteracoes futuras.")}
            <CardNoticias/>
            <CardNoticias/>
            <CardNoticias/>
            <CardNoticias/>
            <CardNoticias/>
            <CardNoticias/>
            <CardNoticias/>
            </View>
        </ScrollView>
        
    )

}