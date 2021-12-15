import { ChangeEventHandler } from "react";

interface Props {
  colorValue: string;
  onChange(value: string): void;
}

export const ColorPicker = ({ colorValue, onChange, ...props }: Props) => {
  //call onChange to update primaryColor in form
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };
  return (
    <>
      <input type="color" value={colorValue} onChange={handleOnChange} />
    </>
  );
};
