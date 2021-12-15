import React from "react";

interface Props {
  //value of color
  //onChange
}

export const ColorPicker = (props: Props) => {
  //onChange that set color when interact with color picker

  return (
    <>
      <input type="color" />
    </>
  );
};
