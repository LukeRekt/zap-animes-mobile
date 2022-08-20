import axios from "axios";
import React, { useEffect, useState } from "react";
import {Button,TouchableOpacity, View,Text, StyleSheet, Dimensions, Image } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';






export default function VideoPlayer(props){
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
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </View>
    );

}

const styles = StyleSheet.create({

      video: {
        alignSelf: 'center',
        width: "100%",
        height: 200,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
})