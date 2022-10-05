import { ResizeMode } from 'expo-av'
import * as ScreenOrientation from 'expo-screen-orientation'
import VideoPlayer from 'expo-video-player'
import React, { useRef, useState } from "react";
import { View,Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Dimensions, ScrollView, } from 'react-native';
import { setStatusBarHidden } from 'expo-status-bar'

export default function MyList(){
    const refVideo = useRef(null)
    const refVideo2 = useRef(null)
    const [inFullscreen, setInFullsreen] = useState(true)
    const [inFullscreen2, setInFullsreen2] = useState(true)
    return (
        
        <View style={{backgroundColor: "#151538", height:"100%"}}>
            <View style={styles.teste}></View>
            <TouchableWithoutFeedback><View style={styles.teste}></View></TouchableWithoutFeedback>
            {/* {alert("Essa pagina esta sendo utilizada para testar algumas funcoes do Player. IGNORAR")} */}
            <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: ResizeMode.CONTAIN,
        
          source: {
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
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
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        style={{
          videoBackgroundColor: 'black',
          height: inFullscreen2 ? Dimensions.get('window').width : 260,
          width: inFullscreen2 ? Dimensions.get('window').height : 420,
        }}
      />
<View style={styles.teste2}></View>
<Text style={styles.testeTexto}>Teste player de vídeo</Text>
        </View>
        
    )

}

const styles = StyleSheet.create({
    video: {
        width: "100%",
        height: 300,
        zIndex: 1
    },
    teste:{
        backgroundColor: "red",
        width: "100%",
        position: "absolute",
        height:100,
        zIndex: 9999,
        top: 50,
    },
    teste2:{
        backgroundColor: "red",
        width: "100%",
        height:100,
    },
    testeTexto:{
      fontSize: 30,
      color: "white",
      textAlign: "center"
    }
})