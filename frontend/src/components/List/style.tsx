import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 3
    },
    listItem: {
      border: '1px solid #ccc',
      '&:nth-child(2n+0)': {
        borderTop: 0,
        borderBottom: 0
      },
      '&:nth-last-child(1)': {
        borderBottom: '1px solid #ccc'
      },
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'flex'
      }
    },
    price: {
      textAlign: 'right',
      '& span.discount': {
        color: '#ccc',
        fontSize: '0.9em',
        textDecoration: 'line-through'
      },
      '& span.by': {
        color: '#ccc',
        fontSize: '0.9em'
      }
    }
  });

export default styles;
