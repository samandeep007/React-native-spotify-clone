import TrackPlayer, { RepeatMode, Event } from "react-native-track-player";
import { playListData } from "./src/constants";

export async function setupPlayer() {
    let isSetup = false;
    try {
       await TrackPlayer.getActiveTrack();
       isSetup = true;
    } catch (error) {
        await TrackPlayer.setupPlayer();
        isSetup = true;
    } finally {
        return isSetup;
    }
}

export async function addTrack(){
    await TrackPlayer.add(playListData); //This needs to be Track[]
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}


export default async function service() {

    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    }); 

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play();
    })

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.next();
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.previous();
    })
}