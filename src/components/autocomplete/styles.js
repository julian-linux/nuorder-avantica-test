import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  container: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    zIndex: 3,
    width: '20px!important',
    height: '20px!important',
    top: '25px',
    left: '10px'
  },
  autocomplete: {
    marginBottom: theme.spacing(2),
    '& .MuiFormLabel-root': {
      marginLeft: theme.spacing(3)
    },
    '& .MuiInputBase-root': {
      paddingLeft: theme.spacing(5)
    }
  }
}));
