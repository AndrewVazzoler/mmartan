import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import { List, ListItem, ListItemText } from '@material-ui/core';

import styles from './style';
import { Props, State } from './types';

import withRoot from '../../withRoot';
import ListImg from '../ListImg';

class ListMM extends React.Component<Props & WithStyles<typeof styles>, State> {
  render() {
    const { list } = this.props;
    return (
      <>
        <div className={this.props.classes.root}>
          <List>
            {list.map((item, index) => {
              const withDiscount = (
                <div>
                  <span className="discount">
                    R$ {item.discount ? item.discount.toLocaleString() : ''}
                  </span>
                  <span className="by"> por </span>
                  R$ {item.price.toLocaleString()}
                </div>
              );
              return (
                <ListItem key={index} className={this.props.classes.listItem}>
                  <ListImg images={item.images} />
                  <ListItemText primary={item.name} secondary={item.subName} />
                  <ListItemText
                    className={this.props.classes.price}
                    primary={
                      item.discount ? withDiscount : item.price.toLocaleString()
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      </>
    );
  }
}

export default withRoot(withStyles(styles)(ListMM));
