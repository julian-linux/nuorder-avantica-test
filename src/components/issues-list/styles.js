import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export const useListStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "auto",
    '& .Mui-selected .issues-list-body': {
      minHeight: '65px',
      height: 'auto',
      overflow: "auto"
    },
  },
  iconSmall: {
    width: "20px",
    height: "20px",
  },
  wrapText: {
    // width: '90%',
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  body: {
    height: "65px",
    overflow: "hidden",
    '&:hover': {
      minHeight: '65px',
      height: 'auto',
      overflow: "auto"
    },
  },
}));
