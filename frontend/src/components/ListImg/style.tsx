import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
  createStyles({
    itemGroupImg: {
      maxWidth: 300
    },
    itemImg: {
      marginLeft: theme.spacing.unit,
      width: theme.spacing.unit * 8
    }
  });

export default styles;
