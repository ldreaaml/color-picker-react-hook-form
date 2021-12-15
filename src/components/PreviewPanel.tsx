import {
  createStyles,
  createTheme,
  Grid,
  makeStyles,
  MuiThemeProvider,
  Theme,
} from "@material-ui/core";
import { useAtom } from "jotai";
import { defaultAtom } from "./atoms/defaultColor";
import { PreviewItem } from "./PreviewItem";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "1px solid red",
    },
  })
);

export const PreviewPanel = (props: Props) => {
  const classes = useStyles();

  //use atom for default color
  const [theme] = useAtom(defaultAtom);

  //create mui theme
  const currentTheme = createTheme({
    palette: {
      primary: {
        main: theme,
      },
    },
  });

  return (
    <>
      <MuiThemeProvider theme={currentTheme}>
        <Grid container className={classes.root}>
          <PreviewItem />
          <PreviewItem />
        </Grid>
      </MuiThemeProvider>
    </>
  );
};
