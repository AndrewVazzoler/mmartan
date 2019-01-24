import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import styles from './style';
import { Props, State } from './types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import withRoot from '../../withRoot';

class AppBarMM extends React.Component<
  Props & WithStyles<typeof styles>,
  State
> {
  render() {
    return (
      <AppBar elevation={1} position="absolute" color="inherit">
        <Toolbar>
          <Typography
            className={this.props.classes.title}
            variant="h4"
            color="inherit"
            noWrap
          >
            {this.props.title}
          </Typography>
          <div className={this.props.classes.grow} />
          {this.props.children}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRoot(withStyles(styles)(AppBarMM));
