import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import styles from './style';
import { Props, State } from './types';

import Typography from '@material-ui/core/Typography';

import withRoot from '../../withRoot';

class Breadcrumb extends React.Component<
  Props & WithStyles<typeof styles>,
  State
> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography
          variant="h4"
          component="h2"
          className={this.props.classes.title}
        >
          {this.props.title}
        </Typography>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Breadcrumb));
