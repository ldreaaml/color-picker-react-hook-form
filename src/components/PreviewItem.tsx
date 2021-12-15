import { makeStyles, Theme, createStyles, Paper } from "@material-ui/core";
import React from "react";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      height: 100,
      width: 100,
      //use color set by Mui ThemeProvider
      background: theme.palette.primary.main,
      margin: 10,
    },
  })
);

export const PreviewItem = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Paper variant="outlined" className={classes.item} />
    </>
  );
};
