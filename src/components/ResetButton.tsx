import { Button, ButtonProps } from "@material-ui/core";
import React from "react";

interface Props extends ButtonProps {}

export const ResetButton = (props: Props) => {
  return (
    <>
      <Button>Reset Color</Button>
    </>
  );
};
