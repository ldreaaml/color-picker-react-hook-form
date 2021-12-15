import { useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { myTheme } from "./atoms/defaultColor";
import { ColorPicker } from "./ColorPicker";
import { PreviewPanel } from "./PreviewPanel";
import { Controller, useForm, useWatch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Button, debounce, Typography } from "@material-ui/core";

interface Props {}

type ColorInputs = {
  primaryColor: string;
};

export const ThemeEditor = (props: Props) => {
  //hook form
  const {
    control,
    reset,
    formState: { isDirty },
  } = useForm<ColorInputs>({
    defaultValues: {
      primaryColor: "#0080c9", //default color
    },
  });

  //update color when input changes
  const [atomColor, setColor] = useAtom(myTheme);
  //update primaryColor whenever primaryColor in control changes
  const newPrimaryColor = useWatch({ control, name: "primaryColor" });

  //useCallBack -> for optimising - return cached result when same inputs occur again
  const setColorDebounce = useCallback(
    debounce((color) => {
      setColor(newPrimaryColor); //save them to be used in MuiThemeProvider
    }, 1),
    [newPrimaryColor]
  );
  useEffect(() => {
    setColorDebounce(newPrimaryColor);
  }, [setColorDebounce, newPrimaryColor]);

  //reset primaryColor in useForm to default value
  const resetColor = () => {
    reset();
  };

  return (
    <>
      <PreviewPanel />
      {process.env.NODE_ENV === "development" && <DevTool control={control} />}
      <form>
        <Button disabled={!isDirty} onClick={resetColor}>
          Reset Color
        </Button>
        <Controller
          name={"primaryColor"}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <>
              <ColorPicker colorValue={value} onChange={onChange} />
            </>
          )}
        />
        <Typography>{atomColor}</Typography>
      </form>
    </>
  );
};
