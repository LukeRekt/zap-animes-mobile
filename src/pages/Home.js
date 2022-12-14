import axios from "axios";
import React, { useEffect, useState } from "react";
import {Button,TouchableOpacity, View,Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator } from "react-native";
import { REACT_APP_API_URL } from "../utils/config";
import Carousel from "react-native-snap-carousel";
import EmBreve from "../components/EmBreve";
import * as Updates from 'expo-updates';
import HomeNews from "../components/HomeNewsButton";
import ShareHomeComponent from "../components/ShareHomeComponent";

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.45




const carouselItens = [
    {
        imgUrl: 'https://subanimes.biz/wp-content/uploads/2022/07/assistir-todos-episodios-lycoris_recoil_online-brasil-subanimes-full-hd-2022-legendado.jpg'
    },
    {
        imgUrl: 'https://subanimes.biz/wp-content/uploads/2022/01/assistir-ijiranaide-nagatoro-san-todos-os-episodios-dublado-2021-hd-subanimes-online-full-hd-brasil-legendado.jpg'
    },
    {
        imgUrl: 'https://subanimes.biz/wp-content/uploads/2022/07/assistir-todos-os-episodios-kanojo-okarishimasu-2-legendado-subanimes-online-brasil-2022.jpg',
    },
    {
    imgUrl: 'https://subanimes.biz/wp-content/uploads/2021/08/assistir-kobayashi-san-chi-no-maid-dragon-s-todos-os-episodios-dublado-hd-subanimes-animes-online.jpg',
    }
]




export default function Home({navigation}){

    useEffect(() => {
        reactToUpdates();
        
    }, []);
    
    const reactToUpdates = async () => {
        Updates.addListener((event) => {
            if(event.type === Updates.UpdateEventType.UPDATE_AVAILABLE){
                // Updates.reloadAsync();aaaaaa
                alert("Nova Atualizacao disponivel, feche e abra o app!")
            }
        })
    }


    //PRIMEIRO CAROUSEL
    const [posts, setPosts] = useState();
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/getanim`)
            .then(res => {
                setPosts(res.data.animes)
            })
    }, [REACT_APP_API_URL])
    //CAROUSEL NOVOS ANIMESs
    const [novosAnimes, setNovosAnimes] = useState();
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/getnovosanim`)
            .then(res => {
                setNovosAnimes(res.data.animes)
            })
    }, [REACT_APP_API_URL])
    
    //CAROUSEL COM??DIA
    const [animesComedia, setAnimesComedia] = useState();
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/getanimtemas/Com??dia`)
            .then(res => {
                setAnimesComedia(res.data.animes)
            })
    }, [REACT_APP_API_URL])
        //CAROUSEL ISEKAI
        const [animesIsekai, setAnimesIsekai] = useState();
        useEffect(() => {
            axios.get(`${REACT_APP_API_URL}/getanimtemas/Isekai`)
                .then(res => {
                    setAnimesIsekai(res.data.animes)
                })
        }, [REACT_APP_API_URL])


    function _onPressCarousel(item){
        navigation.navigate("AnimeScreen", item);
    }


    function carouselCardItem ({item, index}){
        return (
            <TouchableOpacity onPress={() => _onPressCarousel(item)} style={styles.cardCarousel}
             key={index}>
                <Image style={styles.image} source={{ uri: `${REACT_APP_API_URL}/${item.imagem}`}}/>
                <View style={styles.animeInfos}>
                    <Text style={styles.animeInfosTexto}>{item.nome}</Text>
                    {item.dublado == false ? (<Text style={styles.animeInfosTextoBaixo}>S??rie???Legendado</Text>) : (<Text style={styles.animeInfosTextoBaixo}>S??rie???Dub | Leg</Text>)}
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <EmBreve idAnime={6}/>
            <HomeNews/>
            {/* <Text style={{color: "white"}}>Home</Text> */}
            <Text style={styles.texto}>OS MAIS TOPS DO ZAP</Text>
            
            {!posts ? (<ActivityIndicator size={70} color="#fc6203" />) : (<View style={styles.containerEpisodios}>
            <Carousel
                data={posts}
                renderItem={carouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
                activeSlideAlignment="start" 
            />
            </View>)}

            <Text style={styles.texto}>ACABOU DE SAIR</Text>
            {!novosAnimes ? (<ActivityIndicator size={70} color="#fc6203" />) : (<View style={styles.containerEpisodios}>
            <Carousel
               data={novosAnimes}
               renderItem={carouselCardItem}
               sliderWidth={SLIDER_WIDTH}
               itemWidth={ITEM_WIDTH}
               useScrollView={true}
               activeSlideAlignment="start" 
           />
           </View>)}
           {/* <ShareHomeComponent/> */}
            <Text style={styles.texto}>COM??DIA</Text>
            {!animesComedia ? (<ActivityIndicator size={70} color="#fc6203" />) : (            <View style={styles.containerEpisodios}>
            <Carousel
               data={animesComedia}
               renderItem={carouselCardItem}
               sliderWidth={SLIDER_WIDTH}
               itemWidth={ITEM_WIDTH}
               useScrollView={true}
               activeSlideAlignment="start" 
           />
           </View>)}
            <Text style={styles.texto}>ISEKAIS</Text>
            {!animesIsekai ? (<ActivityIndicator size={70} color="#fc6203" />) : (            <View style={styles.containerEpisodios}>
            <Carousel
               data={animesIsekai}
               renderItem={carouselCardItem}
               sliderWidth={SLIDER_WIDTH}
               itemWidth={ITEM_WIDTH}
               useScrollView={true}
               activeSlideAlignment="start" 
           />
           </View>)}

            
        </ScrollView>
        
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#151538",
        paddingTop: 0
    },
    containerEpisodios:{
    },
    cardCarousel:{
        width: ITEM_WIDTH,
        marginBottom: 0,
    },
    image:{
        
        height: 250,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1
    },
    animeInfos:{
        backgroundColor: "#2a2a3d",

    },
    animeInfosTexto:{
        color: "white",
        margin: 5,
        fontSize: 18,
        fontFamily: "OpenSans_400Regular",
    },
    animeInfosTextoBaixo:{
        color: "#ffbe63",
        margin: 5,
    },
    texto:{
        color: 'white',
        marginLeft: 0,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 20,
        fontFamily: "OpenSans_400Regular"
    }
})