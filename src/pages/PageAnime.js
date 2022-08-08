import React from "react";
import { View,Text } from "react-native";


export default function PageAnime(props){
    return (
        <View style={{backgroundColor: "#151538", height:"100%"}}>
            {console.log(props.route.params)}
            <Text style={{color: "white", fontSize: 30}}>{props.route.params.nome}</Text>
            <Text style={{color: "white"}}>{props.route.params.estudio}</Text>
            <Text style={{color: "white"}}>{props.route.params.diretor}</Text>
            <Text style={{color: "white"}}>{props.route.params.autor}</Text>
            <Text style={{color: "white"}}>{props.route.params.ano}</Text>
            <Text style={{color: "white"}}>{props.route.params.diaLancamento}</Text>
            <Text style={{color: "white"}}>{props.route.params.episodios}</Text>
            <Text style={{color: "white"}}>{props.route.params.especiais}</Text>
            <Text style={{color: "white"}}>{props.route.params.imagem}</Text>
            <Text style={{color: "white"}}>{props.route.params.filmes}</Text>
            <Text style={{color: "white"}}>{props.route.params.nota}</Text>
            <Text style={{color: "white"}}>{props.route.params.descricao}</Text>
            <Text style={{color: "white"}}>{props.route.params.temas}</Text>
        </View>
        
    )

}