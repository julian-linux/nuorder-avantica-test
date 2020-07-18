import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    zIndex: 3,
    width: "20px!important",
    height: "20px!important",
    top: "25px",
    left: "10px",
  },
  autocomplete: {
    "& .MuiFormLabel-root": {
      // marginLeft: theme.spacing(1),
    },
    "& .MuiInputBase-root": {
      paddingLeft: theme.spacing(1),
    },
  },
}));
