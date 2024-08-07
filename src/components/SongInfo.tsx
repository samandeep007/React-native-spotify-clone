import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Track } from 'react-native-track-player'

type songInfoProps = PropsWithChildren<{
    track: Track | null | undefined
}>
export default function SongInfo(): JSX.Element {
  return (
    <View>d
      <Text>SongInfo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '90%',
      marginTop: 18,
  
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'center',
    },
    name: {
      marginBottom: 8,
      textAlign: 'center',
  
      color: '#fff',
      fontSize: 24,
      fontWeight: '800',
    },
    artist: {
      color: '#d9d9d9',
      textAlign: 'center',
    },
  });

