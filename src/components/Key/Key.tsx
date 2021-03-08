import clsx from "clsx";
import { FC } from "react";
import { NoteType } from "../../domain/note";
import "./style.css";

interface KeyProps {
    type: NoteType;
    label: string;
    disabled?: boolean;
}

export const Key: FC<KeyProps> = ({type, label, ...rest}) => {
    return (
        <button className={clsx(`key key--${type}`)} {...rest}>
            {label}
        </button>
    );
}