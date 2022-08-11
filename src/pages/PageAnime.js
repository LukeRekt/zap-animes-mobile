import React from "react";
import { View,Text, StyleSheet, Image, ScrollView } from "react-native";


export default function PageAnime(props){
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexDirection:'column'}}>
            <View style={styles.animeTitulo}>
            <Text style={{color: "white", fontSize: 23, textAlign: "center", paddingVertical: 10}}>{props.route.params.nome}</Text>
            </View>
            <View style={styles.animeCard}>
            <Image style={styles.imagem} source={{ uri: `http://192.168.0.103:3232/${props.route.params.imagem}`}}/>
            <View style={styles.animeLancamento}>
            <Text style={styles.animeLancamentoText}>EM LANÇAMENTO</Text>
            </View>

            <View style={styles.animeEpEsFi}>
            
                <View style={styles.animeEps}>
                <Text style={styles.textoEps}>EPISÓDIOS</Text>
                <Text style={styles.textoEpsScn}>{props.route.params.episodios}</Text>
                </View>

                <View style={styles.animeEps}>
                <Text style={styles.textoEps}>ESPECIAIS</Text>
                <Text style={styles.textoEpsScn}>{props.route.params.especiais}</Text>
                </View>

                <View style={styles.animeEps}>
                <Text style={styles.textoEps}>FILMES</Text>
                <Text style={styles.textoEpsScn}>{props.route.params.filmes}</Text>
                </View>

            </View>

            <View style={styles.animeEpProducers}>
            
            <View style={styles.animeProducersTxtContainer}>
            <Text style={styles.animeProducersTxt}>Autor</Text>
            <Text style={styles.animeProducersTxtScnd}>{props.route.params.autor}</Text>
            </View>

            <View style={styles.animeProducersTxtContainer}>
            <Text style={styles.animeProducersTxt}>Diretor</Text>
            <Text style={styles.animeProducersTxtScnd}>{props.route.params.diretor}</Text>
            </View>

            <View style={styles.animeProducersTxtContainer}>
            <Text style={styles.animeProducersTxt}>Estúdio</Text>
            <Text style={styles.animeProducersTxtScnd}>{props.route.params.estudio}</Text>
            </View>

            <View style={styles.animeProducersTxt}>
            <Text style={styles.animeProducersTxt}>Ano</Text>
            <Text style={styles.animeProducersTxtScnd}>{props.route.params.ano}</Text>
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
        alignItems: "center",
        justifyContent: "center"
    },
    animeTitulo:{
        backgroundColor: "#181829",
        marginBottom: 10,
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, .05)",
        borderWidth: 1,
    },
    animeCard:{
        flex:1,
        width: "98%",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#181829",
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, .05)",
        borderWidth: 1,
    },
    imagem:{
        height: 350,
        borderRadius: 8,
        width: "95%",
        marginBottom: 10
        
    },
    animeLancamento:{
        backgroundColor: "#ffbe63",
        borderRadius: 5,
        marginBottom: 10
    },
    animeLancamentoText:{
        fontSize:32,
        paddingHorizontal: 35,
        paddingVertical: 5.

    },
    animeEpEsFi:{
        flex:1,
        flexDirection: "row",
        width: "98%"
    },
    animeEps:{
        backgroundColor: "rgba(255, 255, 255, .03)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
        borderRadius: 4,
        marginBottom: 10
        
    },
    animeEpProducers:{
        flex:1,
        marginLeft: 0,
        width: "95%"
    },
    animeProducersTxtContainer:{

    },
    animeProducersTxt:{
        color: "#ffbe63",
        marginBottom: 8,
        
    },
    animeProducersTxtScnd:{
        color: "rgba(255, 255, 255, .5)",
        marginBottom: 8,
        borderColor: "rgba(255, 255, 255, .05)",
        borderBottomWidth: 1,
    },
    textoEps:{
        color: "#ffbe63",
        paddingTop: 15,
    },
    textoEpsScn:{
        color:"#fff",
        fontSize: 25,
    },
    animeSinopse:{
        width: "98%",
        backgroundColor:"#181829",
        marginTop: 5,
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, .05)",
        borderWidth: 1,
        
        
        
    },
    animeSinopseTitulo:{
        fontSize: 30,
        color: "white",
        paddingLeft: 10
    },
    animeSinopseTexto:{
        padding: 10,
        color: "rgba(255, 255, 255, .5)",
    }
})