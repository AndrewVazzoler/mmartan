import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    }
  });

export default styles;
