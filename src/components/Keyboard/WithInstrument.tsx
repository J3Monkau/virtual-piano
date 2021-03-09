import React, { FC, useEffect } from "react";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument: FC = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load, current } = useSoundfont({ AudioContext });

  useEffect(() => {
    if (!loading && current !== DEFAULT_INSTRUMENT) load();
  }, [load, loading, current]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
