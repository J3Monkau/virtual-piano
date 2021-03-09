import React from "react";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "../Keyboard/Keyboard";
import { KeyboardWithInstrument } from "../Keyboard/WithInstrument";
import { NoAudioMessage } from "../NoAudioMessage/NoAudioMessage";

export const Main = () => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
};
