import { useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { myTheme } from "./atoms/defaultColor";
import { ColorPicker } from "./ColorPicker";
import { PreviewPanel } from "./PreviewPanel";
import { ResetButton } from "./ResetButton";
import { Controller, useForm, useWatch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { debounce, Typography } from "@material-ui/core";

interface Props {}

type ColorInputs = {
  primaryColor: string;
};

export const ThemeEditor = (props: Props) => {
  //hook form
  const { control } = useForm<ColorInputs>({
    defaultValues: {
      primaryColor: "#0080c9", //default color
    },
  });

  //update color when input changes
  const [, setPrimaryColor] = useAtom(myTheme);
  //update primaryColor whenever primaryColor in control changes
  const newPrimaryColor = useWatch({ control, name: "primaryColor" });

  //useCallBack -> for optimising - return cached result when same inputs occur again
  const testCallBack = useCallback(
    debounce((color) => {
      setPrimaryColor(newPrimaryColor);
    }, 1),
    [newPrimaryColor]
  );
  useEffect(() => {
    testCallBack(newPrimaryColor);
  }, [testCallBack, newPrimaryColor]);

  return (
    <>
      <PreviewPanel />
      {process.env.NODE_ENV === "development" && <DevTool control={control} />}
      <form>
        <ResetButton />
        <Controller
          name={"primaryColor"}
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <ColorPicker colorValue={value} onChange={onChange} />
              <Typography>{newPrimaryColor}</Typography>
            </>
          )}
        />
      </form>
    </>
  );
};
