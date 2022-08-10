import React from "react";
import { View,Text, StyleSheet, Image, ScrollView } from "react-native";


export default function PageAnime(props){
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexDirection:'column'}}>
            <View style={styles.animeCard}>
            <Text style={{color: "white", fontSize: 23, backgroundColor: "#181829", padding: 2, paddingBottom: 10, paddingTop: 10}}>{props.route.params.nome}</Text>
            <Image style={styles.imagem} source={{ uri: `http://192.168.0.103:3232/${props.route.params.imagem}`}}/>
            <View style={styles.animeLancamento}>
            <Text>Em Lancamento</Text>
            </View>

            <View style={styles.animeEpEsFi}>
            
                <View style={styles.animeEps}>
                <Text style={styles.textoEps}>EPISÓDIOS</Text>
                <Text>{props.route.params.episodios}</Text>
                </View>

                <View style={styles.animeEps}>
                <Text style={styles.textoEps}>EPISÓDIOS</Text>
                <Text>{props.route.params.especiais}</Text>
                </View>

                <View style={styles.animeEps}>
                <Text style={styles.textoEps}>EPISÓDIOS</Text>
                <Text>{props.route.params.filmes}</Text>
                </View>

            </View>

            <View style={styles.animeEpProducers}>
            
            <View style={styles.animeAutor}>
            <Text>Autor</Text>
            <Text>{props.route.params.autor}</Text>
            </View>

            <View style={styles.animeDiretor}>
            <Text>Diretor</Text>
            <Text>{props.route.params.diretor}</Text>
            </View>

            <View style={styles.animeEstudio}>
            <Text>Estúdio</Text>
            <Text>{props.route.params.estudio}</Text>
            </View>

            <View style={styles.animeAno}>
            <Text>Ano</Text>
            <Text>{props.route.params.ano}</Text>
            </View>

        </View>
           
            </View>
           
            <View style={styles.animeSinopse}>
            <Text style={styles.animeSinopseTitulo}>Sinopse</Text>
                <Text style={styles.animeSinopseTexto}>{props.route.params.descricao}</Text>
            </View>

            {console.log(props.route.params)}
            
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
            <Text style={{color: "white"}}></Text>
            <Text style={{color: "white"}}>{props.route.params.temas}</Text>
            </ScrollView>
        </View>
        
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#151538",
        height:"100%",
        flex:1,
    },
    animeCard:{
        flex:1,
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#181829"
    },
    imagem:{
        height: 350,
        borderRadius: 8,
        width: "95%",
        marginBottom: 10
        
    },
    animeLancamento:{
        backgroundColor: "red"
    },
    animeEpEsFi:{
        flex:1,
        flexDirection: "row",
        width: "95%"
    },
    animeEps:{
        backgroundColor: "rgba(255, 255, 255, .03)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 15,
        paddingTop: 15,
        marginRight: 5,
        borderRadius: 4
        
    },
    textoEps:{
        color: "#ffbe63"
    },
    animeSinopseTitulo:{
        fontSize: 30,
        color: "white",
        paddingLeft: 10
    },
    animeSinopse:{
        backgroundColor:"#181829",
        borderColor: "rgba(255, 255, 255, .5)",
        marginTop: 5,
        
    },
    animeSinopseTexto:{
        padding: 10,
        color: "rgba(255, 255, 255, .5)",
    }
})