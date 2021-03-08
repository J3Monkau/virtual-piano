import React from "react";
import { useAudioContext } from "../AudioContextProvider/useAudioContext"
import { Keyboard } from "../Keyboard/Keyboard";
import { NoAudioMessage } from "../NoAudioMessage/NoAudioMessage";

export const Main = () => {
    // const AudioContext = useAudioContext();
    const AudioContext = useAudioContext();

    return !!AudioContext ? <Keyboard /> : <NoAudioMessage/> 
}