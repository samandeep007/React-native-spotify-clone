import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackPlayer, {Event, Track, useTrackPlayerEvents} from 'react-native-track-player';

const {width} = Dimensions.get('window');

export default function MusicPlayer() {
  return (
    <View>
      <Text>MusicPlayer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
  });
  