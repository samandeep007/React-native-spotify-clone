import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, {Event, Track, useTrackPlayerEvents} from 'react-native-track-player';

import { playListData } from '../constants';

import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';


const {width} = Dimensions.get('window');

export default function MusicPlayer() {

    const[track, setTrack] = useState<Track | null>();

    const renderArtWork = () => {
        return(
            <View style={styles.listArtWrapper}>
                
            </View>
        )
    }

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
  