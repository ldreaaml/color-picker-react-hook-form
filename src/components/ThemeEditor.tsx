import { useAtom } from "jotai";
import { useEffect } from "react";
import { defaultAtom } from "./atoms/defaultColor";
import { ColorPicker } from "./ColorPicker";
import { PreviewPanel } from "./PreviewPanel";
import { ResetButton } from "./ResetButton";
import { Controller, useForm, useWatch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

interface Props {}

type ColorInputs = {
  primaryColor: string;
};

export const ThemeEditor = (props: Props) => {
  //update color when input changes
  const [, setPrimaryColor] = useAtom(defaultAtom);

  //hook form
  const { control } = useForm<ColorInputs>({
    defaultValues: {
      primaryColor: "#0080c9",
    },
  });
  //update primaryColor whenever primaryColor in control changes
  const newPrimaryColor = useWatch({ control, name: "primaryColor" });
  //update primary color of MuiThemeProvider
  useEffect(() => {
    setPrimaryColor(newPrimaryColor);
  }, [setPrimaryColor, newPrimaryColor]);

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
            <ColorPicker colorValue={value} onChange={onChange} />
          )}
        />
      </form>
    </>
  );
};

//export themeEditor
