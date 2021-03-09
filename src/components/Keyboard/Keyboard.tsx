import React, { FC } from "react";
import { Key } from "../Key/Key";
import { OctavesRange, selectKey } from "../../domain/keyboard";
import { MidiValue, notes } from "../../domain/note";
import "./style.css";

export interface KeyboardProps {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
}

export const Keyboard: FC<KeyboardProps> = ({ loading, play, stop }) => {
  return (
    <div className="keyboard">
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave as OctavesRange, index);
        return (
          <Key
            type={type}
            label={label}
            disabled={loading}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
          />
        );
      })}
    </div>
  );
};
