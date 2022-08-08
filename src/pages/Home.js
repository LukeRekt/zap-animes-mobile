import axios from "axios";
import React, { useEffect, useState } from "react";
import {Button,TouchableOpacity, View,Text, StyleSheet, Dimensions, Image } from "react-native";

import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.60




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
        axios.get(`http://192.168.0.103:3232/getanim`)
            .then(res => {
                setPosts(res.data.animes)
                
            })
    }, [])

    function _onPressCarousel(item){
        navigation.navigate("AnimeScreen", item);
    }
    function carouselCardItem ({item, index}){
        return (
            <TouchableOpacity onPress={() => _onPressCarousel(item)} style={styles.cardCarousel}
             key={index}>
                <Image style={styles.image} source={{ uri: `http://192.168.0.103:3232/${item.imagem}`}}/>
                {console.log(item.imagem)}
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            {/* <Text style={{color: "white"}}>Home</Text> */}
            <Carousel
                data={posts}
                renderItem={carouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
                
            />
            <Text style={styles.texto}>OS MAIS TOPS DO ZAP</Text>
             <Carousel
                data={posts}
                renderItem={carouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
            />
            {/* <Button
            onPress={() => navigation.navigate('Home')}
            >Teste</Button> */}
        </View>
        
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#151538",
        
        paddingTop: 30
    },
    cardCarousel:{
        width: ITEM_WIDTH,
    },
    image:{
        
        height: 250,
        borderRadius: 8,
    },
    texto:{
        textAlign: 'center',
        color: 'white',
        marginTop: 1,
        marginBottom: 30,
        fontSize: 20,
    }
})