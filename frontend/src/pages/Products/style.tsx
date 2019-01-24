import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flex: '1 1 auto',
      zIndex: 3,
      position: 'relative',
      overflow: 'hidden',
      flexDirection: 'column'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 6,
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      height: 'auto',
      overflow: 'auto',
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing.unit * 10,
        paddingRight: theme.spacing.unit * 10
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.spacing.unit * 15,
        paddingRight: theme.spacing.unit * 15
      }
    },
    titlePanel: {
      backgroundColor: '#dedede'
    },

    pagination: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'flex'
      }
    },

    divider: {
      marginTop: theme.spacing.unit * 3
    },

    countProducts: {
      borderBottom: '4px solid #e0bf80',
      marginTop: theme.spacing.unit * 3
    }
  });

export default styles;
