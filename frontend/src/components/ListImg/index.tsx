import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import styles from './style';
import { Props, State } from './types';

import withRoot from '../../withRoot';
import { API_ENDPOINT } from '../../utils/api';

class ListImg extends React.Component<
  Props & WithStyles<typeof styles>,
  State
> {
  render() {
    return (
      <div className={this.props.classes.itemGroupImg}>
        {this.props.images.map((img, index) => {
          return (
            <img
              key={index}
              className={this.props.classes.itemImg}
              src={API_ENDPOINT + '/' + img.src}
              alt={img.name}
            />
          );
        })}
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(ListImg));
