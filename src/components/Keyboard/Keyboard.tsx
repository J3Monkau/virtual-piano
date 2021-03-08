import React, { FC } from "react";
import { Key } from "../Key/Key";
import { OctavesRange, selectKey } from "../../domain/keyboard";
import { notes } from "../../domain/note";

export const Keyboard: FC = () => {
    return (
        <div>
            {notes.map(({midi, type, index, octave}) => {
                const label = selectKey(octave as OctavesRange, index);
                return (<Key type={type} label={label}/>);
            })}
        </div>
    )
}