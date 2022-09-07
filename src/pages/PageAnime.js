import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, Image, ScrollView, SafeAreaView, SectionList } from "react-native";
import AnimeEpisodes from "../components/AnimeEpisodes";
import {REACT_APP_API_URL} from '@env'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function PageAnime(props){
    

    const [temporada, setTemporada] = useState()

    useEffect(() => {
      axios.get(`${REACT_APP_API_URL}/gettemporada/${props.route.params.id}`)
        .then(res => {
        setTemporada(res.data.temporadas)
        console.log(REACT_APP_API_URL)
        console.log(REACT_APP_API_URL)
        console.log(REACT_APP_API_URL)
        console.log(temporada)
        })
    }, [props, REACT_APP_API_URL])


    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );

      function Teste(propsa){
    
        var indents = [];
        for (var i = 0; i < propsa; i++) {
          indents.push(<span className='indent' key={i}></span>);
        }
        console.log(indents)
        return indents;
      }


    return (
        
        <View style={styles.container}>
            {console.log(REACT_APP_API_URL)}
                {console.log(REACT_APP_API_URL)}
                {console.log(REACT_APP_API_URL)}
            <ScrollView contentContainerStyle={{flexDirection:'column'}}>
            <View style={styles.animeTitulo}>
            <Text style={{color: "white", fontSize: 23, textAlign: "center", paddingVertical: 10}}>{props.route.params.nome}</Text>
            </View>
            <View style={styles.animeCard}>
            <Image style={styles.imagem} source={{ uri: `${REACT_APP_API_URL}/${props.route.params.imagem}`}}/>
            <View style={styles.animeLancamento}>
            {props.route.params.lancamento === false ? (<Text style={styles.animeCompletoText}><FontAwesome name="check" size={35} color="white" /> Completo</Text>) :
             (<View style={styles.textoLancamentoContainer}>
                 <MaterialCommunityIcons name="lightning-bolt" size={40} color="black" style={{marginLeft: 10}}/>
                <View style={styles.animeLancamentoTextTextos}>
                <Text style={styles.animeLancamentoText}>EM LANÇAMENTO</Text>
                <Text>{props.route.params.diaLancamento}</Text>
                </View>
            </View>)}
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

            {/* {console.log(props.route.params)} */}
            
            {/* <Text style={{color: "white"}}>{props.route.params.estudio}</Text>
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
            <Text style={{color: "white"}}>{props.route.params.temas}</Text> */}
            <View style={styles.Episodios}>
            {/* {!posta ? (<View><Text>ERRO</Text></View>) : (
            <View>

                {posta.map((item, index) =>{
                    return <Text>Episódios</Text>
                })}
                </View>
                )} */}
                {!temporada ? (<View><Text style={styles.animeSinopseTitulo}>Episódios indisponíveis</Text></View>) : (temporada.map((post, index) =>
              <AnimeEpisodes key={index} idAnime={props.route.params.id} temporada={post.temporadaAnime} nomeTemporada={post.nomeTemporada}/>)    )}
              
            </View>
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
        width: "97%"

    },
    textoLancamentoContainer:{
        paddingVertical: 5,
        backgroundColor: "#ffbe63",
        borderRadius: 5,
        alignItems: "center",
        flexDirection:"row"
    },
    animeLancamentoText:{
        fontSize:25,
    },
    animeCompletoText:{
        fontSize:32,
        paddingHorizontal: 35,
        paddingVertical: 5.,
        backgroundColor: "#27ae60",
        borderRadius: 5,
        marginBottom: 10,
        color: "white",
        fontWeight: "400"
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
    },
    Episodios:{
    },

    header: {
        fontSize: 32,
        backgroundColor: "#fff"
      },
      containeraa: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
      },
      item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
      },
      title: {
        fontSize: 24
      }
})