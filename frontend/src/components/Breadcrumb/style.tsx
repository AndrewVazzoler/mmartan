import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      backgroundColor: '#eeedf1',
      padding: theme.spacing.unit * 4,
      paddingTop: theme.spacing.unit * 11,
      overflow: 'auto',
      borderBottom: '1px solid #ccc'
    },
    title: {
      fontWeight: 300
    }
  });

export default styles;
