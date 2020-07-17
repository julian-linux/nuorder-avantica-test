import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  floatBox: {
    position: "absolute",
    top: "2px",
    right: 0,
  },
  floatBoxContainer: {
    position: "relative",
  },
}));
