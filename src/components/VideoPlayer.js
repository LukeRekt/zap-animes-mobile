import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {Button,TouchableOpacity, View,Text, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import VideoPlayer from 'expo-video-player'
import { ResizeMode } from 'expo-av'
import { setStatusBarHidden } from 'expo-status-bar'
import { useNavigation } from "@react-navigation/native";

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
    const [test, setteste] = useState();
    const refVideo2 = useRef(null)
    const [inFullscreen2, setInFullsreen2] = useState(false)
    const refScrollView = useRef(null)

    const update = useCallback(status => {
      // console.log(status.durationMillis)
      
      setTempoTotal(Math.floor(status.durationMillis / 1000))
      setTempoAtual(Math.floor(status.positionMillis / 1000));
    })

    const calc = () => {
      console.log("rodando")
      return tempoAtual
    }
     
    return (
        <View style={styles.container}>
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
      {console.log(props)} 
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