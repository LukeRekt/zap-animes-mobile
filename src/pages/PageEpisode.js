import axios from "axios";
import React, { useEffect, useState } from "react";
import {Button,TouchableOpacity, View,Text, StyleSheet, Dimensions, Image } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';






export default function PageEpisode(props){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
     console.log(props.route.params.video)
    return (
        <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: `http://192.168.0.103/${props.route.params.video}`,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        {/* <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View> */}
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#181829',
      },
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