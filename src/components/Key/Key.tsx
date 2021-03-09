import clsx from "clsx";
import { FC, ReactEventHandler } from "react";
import { NoteType } from "../../domain/note";
import "./style.css";

interface KeyProps {
  type: NoteType;
  label: string;
  onDown: ReactEventHandler<HTMLButtonElement>;
  onUp: ReactEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Key: FC<KeyProps> = ({ type, label, onDown, onUp, ...rest }) => {
  return (
    <button
      onMouseDown={onDown}
      onMouseUp={onUp}
      className={clsx(`key ${type}`)}
      {...rest}
    >
      {label}
    </button>
  );
};
