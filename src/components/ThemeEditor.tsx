import { useAtom } from "jotai";
import { useEffect } from "react";
import { defaultAtom } from "./atoms/defaultColor";
import { ColorPicker } from "./ColorPicker";
import { PreviewPanel } from "./PreviewPanel";
import { ResetButton } from "./ResetButton";

interface Props {}

type ColorInputs = {
  primaryColor: string;
};

export const ThemeEditor = (props: Props) => {
  return (
    <>
      <PreviewPanel />
      <form>
        <ResetButton />
        <ColorPicker />
      </form>
    </>
  );
};

//export themeEditor
