import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = (theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: 20,
      border: '1px solid #ccc',
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto'
      }
    },
    searchIcon: {
      color: '#888',
      width: theme.spacing.unit * 8,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    searchClean: {
      color: '#888',
      width: theme.spacing.unit * 7,
      height: '100%',
      position: 'absolute',
      right: 0,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover':{
        color: '#736e6e',
      }
    },
    iconSearchClean: {
      fontSize: 20
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit * 8,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 8,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 300,
        '&:focus': {
          width: 400
        }
      }
    }
  });

export default styles;
