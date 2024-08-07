import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import {useProgress} from 'react-native-track-player';

export default function SongSlider() {

    const {position, duration} = useProgress();
    

    return (
    <View>
      <Text>SongSlider</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    sliderContainer: {
      width: 350,
      height: 40,
      marginTop: 25,
  
      flexDirection: 'row',
    },
    timeContainer: {
      width: 340,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    time: {
      color: '#fff',
    },
  });