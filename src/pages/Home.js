import axios from "axios";
import React, { useEffect, useState } from "react";
import {Button,TouchableOpacity, View,Text, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import {REACT_APP_API_URL} from '@env'
import Carousel from "react-native-snap-carousel";
import EmBreve from "../components/EmBreve";

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
    
    const [posts, setPosts] = useState();
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/getanim`)
            .then(res => {
                setPosts(res.data.animes)
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
                {console.log(REACT_APP_API_URL)}
                {console.log(REACT_APP_API_URL)}
                {console.log(REACT_APP_API_URL)}
                <View style={styles.animeInfos}>
                    <Text style={styles.animeInfosTexto}>{item.nome}</Text>
                    <Text style={styles.animeInfosTextoBaixo}>Série・Dublado</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <EmBreve/>
            {/* <Text style={{color: "white"}}>Home</Text> */}
            <Text style={styles.texto}>OS MAIS TOPS DO ZAP</Text>
           <View style={styles.containerEpisodios}>
            
            <Carousel
                data={posts}
                renderItem={carouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
                
            />
            </View>
            <Text style={styles.texto}>OS MAIS TOPS DO ZAP</Text>
            <View style={styles.containerEpisodios}>
            
             <Carousel
                data={posts}
                renderItem={carouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
            />
            </View>
            {/* <Button
            onPress={() => navigation.navigate('Home')}
            >Teste</Button> */}
            
        </ScrollView>
        
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#151538",
        paddingTop: 30
    },
    containerEpisodios:{
    },
    cardCarousel:{
        width: ITEM_WIDTH,
        marginBottom: 0,
    },
    image:{
        
        height: 250,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    animeInfos:{
        backgroundColor: "#2a2a3d",

    },
    animeInfosTexto:{
        color: "white",
        margin: 5,
        fontSize: 18
    },
    animeInfosTextoBaixo:{
        color: "#ffbe63",
        margin: 5,
    },
    texto:{
        color: 'white',
        marginLeft: 70,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 20,
    }
})