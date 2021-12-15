import { Typography } from "@material-ui/core";
import { ChangeEventHandler, useState } from "react";

interface Props {
  colorValue: string;
  onChange(value: string): void;
}

export const ColorPicker = ({ colorValue, onChange }: Props) => {
  const [newColor, setNewColor] = useState<string>(colorValue);

  //update colorValue when its value changes
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewColor(e.target.value);
    onChange(e.target.value);
  };
  return (
    <>
      <input type="color" value={newColor} onChange={handleOnChange} />
      <Typography>{newColor}</Typography>
    </>
  );
};
