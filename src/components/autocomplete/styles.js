import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    zIndex: 3,
    width: "16px!important",
    height: "16px!important",
    bottom: 16,
    left: 10,
  },
  autocomplete: {
    "& .MuiInputBase-root": {
      paddingLeft: theme.spacing(1),
    },
  },
}));
