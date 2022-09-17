import React, { useEffect, useState } from "react";
import { View,Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { REACT_APP_API_URL } from "../utils/config";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";



export default function SearchPage(){
    const navigation = useNavigation();
    const [data, setData] = useState();
    const [animeBuscados, setAnimesBuscados] = useState();
    //testeaaa
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/getanim`)
            .then(res => {
                setAnimesBuscados(res.data.animes)
                setData(res.data.animes)
            })
    }, [REACT_APP_API_URL])
    
    const searchFilterFunction = (text) => {
        if(text){
            const newData = data.filter(item => {
                const itemData = item.nome ? item.nome.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setAnimesBuscados(newData);
        }else {
            setAnimesBuscados(data);
        }
    }

    return (
        <View style={{backgroundColor: "#151538", height:"100%"}}>
            <TextInput
            style={styles.input}
            placeholder="Nome do Anime"
            placeholderTextColor="white"
            onChangeText={text => searchFilterFunction(text)}
            ></TextInput>
            <ScrollView>
             {!animeBuscados ? (<Text>Erro</Text>) : (animeBuscados.map((posts, index) => (
             <TouchableOpacity key={index} onPress={() => navigation.navigate("AnimeScreen", posts)} style={styles.animeContainer}>
                <View style={styles.imageSection}>
                <Image style={styles.image} source={{ uri: `${REACT_APP_API_URL}/${posts.imagem}`}}/>
                </View>
                <View style={styles.textSection}>
                <Text style={styles.nomeAnime}>{posts.nome}</Text>
                <Text style={styles.infoAnime}>Lançamento: <Text style={styles.infoAnimeGrande}>{posts.diaLancamento}</Text></Text>
                <Text style={styles.infoAnime}>Episódios: <Text style={styles.infoAnimeGrande}>{posts.episodios}</Text></Text>
                </View>
                
             </TouchableOpacity>)))}
             </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 0,
    color: "white",
    backgroundColor: "#22223a"
    },
    animeContainer:{
        borderColor: "rgba(241, 241, 241, 0.1)",
        borderWidth: 1,
        marginTop: 5,
        flexDirection: "row"

    },
    imageSection:{
        width: 135,
    },
    image:{
        borderColor: "#ffbe63",
        borderWidth: 2,
        marginLeft: 5,
        width: 130,
        height: 160,
    },
    textSection:{
        width: "59%"
    },
    nomeAnime:{
        color:"#ffbe63",
        marginLeft: 4,
        fontSize: 24,
        borderBottomColor: "rgba(241, 241, 241, 0.1)",
        borderBottomWidth: 1
    },
    infoAnime:{
        color: "rgb(241, 241, 241)",
        fontSize: 20,
        borderBottomColor: "rgba(241, 241, 241, 0.1)",
        borderBottomWidth: 1,
    },
    infoAnimeGrande:{
        color: "#ffbe63"
    },
})