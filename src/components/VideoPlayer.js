import axios from "axios";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import {Button,TouchableOpacity, View,Text, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import VideoPlayer from 'expo-video-player'
import { ResizeMode } from 'expo-av'
import { setStatusBarHidden } from 'expo-status-bar'
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { REACT_APP_API_URL } from "../utils/config";

export default function VideoPlayerComponent(props){
//https://helpincoding.com/rotate-expo-video-player-in-full-screen-mode/ <- Obrigado(a)
  function setOrientation() {
    if (Dimensions.get('window').height > Dimensions.get('window').width) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }



    const video = React.useRef(null);
    const [tempoTotal, setTempoTotal] = useState();
    const [tempoAtual, setTempoAtual] = useState();
    const [tempoReproducao, setTempoReproducao] = useState();
    const refVideo2 = useRef(null)
    const [inFullscreen2, setInFullsreen2] = useState(false)
    const refScrollView = useRef(null)
    const {logout, userInfo, isLogged} = useContext(AuthContext);

    const update = useCallback(status => {
      // console.log(status.durationMillis)
      
      setTempoTotal(Math.floor(status.durationMillis / 1000));
      setTempoAtual(Math.floor(status.positionMillis / 1000));
    })

    const calc = () => {
      console.log("rodando")
      return tempoAtual
    }
    useEffect(() => {
   
      
      if(userInfo){
        const variables = {
          nomeUsuario: userInfo.username,
          temporadaAnime: props.temporada,
          episodioAnime: props.episodio,
          idAnime: props.idAnime,
           tempoTotal: tempoTotal,
          nomeEp: props.nomeEp,
          animeImagem: props.animeImagem,
    
        
        }
        axios.post(`${REACT_APP_API_URL}/getprogresso`,  variables, { withCredentials: true })
        .then(res => {
          setTempoReproducao(res.data.tempoAtual)
            // setCarregandoFavoritos(false)
        })
      }
      
  }, [props.nomeEp, props.animeImagem])
     
    return (
        <View style={styles.container}>
          {console.log(tempoReproducao)}
             <ScrollView
      scrollEnabled={!inFullscreen2}
      ref={refScrollView}
      onContentSizeChange={() => {
        if (inFullscreen2) {
          refScrollView.current.scrollToEnd({ animated: true })
        }
      }}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    ></ScrollView>
          <TouchableOpacity onPress={() => refVideo2.current.setPositionAsync(props.fimAbertura * 1000)} style={{display: tempoAtual >= props.inicioAbertura && tempoAtual <= props.fimAbertura ? "flex" : "none",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: 50,
        width: "50%",
        position: "absolute",
        height:50,
        zIndex: 9999,
        bottom: 40,
        justifyContent: "center",
        alignItems: "center",
        right: 1,}}>
          <Text style={{textAlign: "center", fontSize: 15}}>PULAR ABERTURA</Text>
        </TouchableOpacity>
        {console.log(userInfo)}
        {!userInfo ? (<></>) : ( <TouchableOpacity onPress={() => refVideo2.current.setPositionAsync(tempoReproducao * 1000)} style={{display: tempoAtual >= 1 && tempoAtual <= 7 ? "flex" : "none",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: 50,
        width: "50%",
        position: "absolute",
        height:50,
        zIndex: 9999,
        bottom: 80,
        justifyContent: "center",
        alignItems: "center",
        right: 1,}}>
          <Text style={{textAlign: "center", fontSize: 15}}>CONTINUAR REPRODUCAO</Text>
        </TouchableOpacity>)}
       
        
        {/* <Video
          ref={video}
          style={styles.video}
          source={{
            uri: `${props.video}`,
          }}
           onFullscreenUpdate={setOrientation}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        /> */}
        
           <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: ResizeMode.CONTAIN,
          source: {
            uri: `${props.video}`,
          },
          ref: refVideo2,
        }}
        defaultControlsVisible={false}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            console.log("teste")
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
          },
        }}
        style={{
          videoBackgroundColor: 'black',
           height: inFullscreen2 ? Dimensions.get('window').height : 200,
           width: inFullscreen2 ? Dimensions.get('window').width : 400,
        }}
        playbackCallback={update}
      />
      </View>
    );

}

const styles = StyleSheet.create({
      container:{
        width: "100%"
      },
      video: {
        alignSelf: 'center',
        width: "100%",
        height: 200,
        flex:1
      },
      videoOverlay:{
        // display: tempoAtual <= 10 ? "none" : "flex",
        backgroundColor: "red",
        width: "50%",
        position: "absolute",
        height:50,
        zIndex: 9999,
        bottom: 40,
        right: 1,
    },

})