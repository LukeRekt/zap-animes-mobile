import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {Button,TouchableOpacity, View,Text, StyleSheet, Dimensions, Image } from "react-native";
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
    const [status, setStatus] = React.useState({});
    const refVideo2 = useRef(null)
    const [inFullscreen2, setInFullsreen2] = useState(false)
     
    return (
        <View style={styles.container}>
          <View style={styles.teste}></View>
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
          height: inFullscreen2 ? Dimensions.get('window').width : 200,
          width: inFullscreen2 ? Dimensions.get('window').height : 400,
        }}
      />
      </View>
    );

}

const styles = StyleSheet.create({
      container:{
        width:"100%",
      },
      video: {
        alignSelf: 'center',
        width: "100%",
        height: 200,
        
      },
      teste:{
        backgroundColor: "red",
        width: "100%",
        position: "absolute",
        height:100,
        zIndex: 9999,
        top: 10,
    },

})