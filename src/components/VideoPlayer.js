import axios from "axios";
import React, { useEffect, useState } from "react";
import {Button,TouchableOpacity, View,Text, StyleSheet, Dimensions, Image } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function VideoPlayer(props){

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
     
    return (
        <View style={styles.container}>
        <Video
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
        />
      </View>
    );

}

const styles = StyleSheet.create({
      container:{
      },
      video: {
        alignSelf: 'center',
        width: "100%",
        height: 200,
        
      },

})