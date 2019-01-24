import * as React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

//Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

//WithRoot
import withRoot from '../withRoot';

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
    itemGroupImg: {
      maxWidth: 300
    },
    itemImg: {
      marginLeft: theme.spacing.unit,
      width: theme.spacing.unit * 8
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

type State = {
  open: boolean;
};

class Index extends React.Component<WithStyles<typeof styles>, State> {
  state = {
    open: false
  };
  render() {
    return (
      <div className={this.props.classes.root}>
        <List>
          <ListItem className={this.props.classes.listItem}>
            <div className={this.props.classes.itemGroupImg}>
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_1_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_2_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
            </div>
            <ListItemText
              primary="Jogo de lençol Mirage Dobra Feita Ultra"
              secondary="MIRAGE"
            />
            <ListItemText
              className={this.props.classes.price}
              primary={
                <div>
                  <span className="discount">R$ 489,00 </span>
                  <span className="by">por </span>
                  R$ 239,00
                </div>
              }
            />
          </ListItem>
          <ListItem className={this.props.classes.listItem}>
            <div className={this.props.classes.itemGroupImg}>
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_1_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_2_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
            </div>
            <ListItemText
              primary="Jogo de lençol Mirage Dobra Feita Ultra"
              secondary="MIRAGE"
            />
            <ListItemText
              className={this.props.classes.price}
              primary={
                <div>
                  <span className="discount">R$ 489,00 </span>
                  <span className="by">por </span>
                  R$ 239,00
                </div>
              }
            />
          </ListItem>
          <ListItem className={this.props.classes.listItem}>
            <div className={this.props.classes.itemGroupImg}>
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_1_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_2_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
            </div>
            <ListItemText
              primary="Jogo de lençol Mirage Dobra Feita Ultra"
              secondary="MIRAGE"
            />
            <ListItemText
              className={this.props.classes.price}
              primary={
                <div>
                  <span className="discount">R$ 489,00 </span>
                  <span className="by">por </span>
                  R$ 239,00
                </div>
              }
            />
          </ListItem>
          <ListItem className={this.props.classes.listItem}>
            <div className={this.props.classes.itemGroupImg}>
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_1_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_2_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
            </div>
            <ListItemText
              primary="Jogo de lençol Mirage Dobra Feita Ultra"
              secondary="MIRAGE"
            />
            <ListItemText
              className={this.props.classes.price}
              primary={
                <div>
                  <span className="discount">R$ 489,00 </span>
                  <span className="by">por </span>
                  R$ 239,00
                </div>
              }
            />
          </ListItem>
          <ListItem className={this.props.classes.listItem}>
            <div className={this.props.classes.itemGroupImg}>
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_1_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_2_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
            </div>
            <ListItemText
              primary="Jogo de lençol Mirage Dobra Feita Ultra"
              secondary="MIRAGE"
            />
            <ListItemText
              className={this.props.classes.price}
              primary={
                <div>
                  <span className="discount">R$ 489,00 </span>
                  <span className="by">por </span>
                  R$ 239,00
                </div>
              }
            />
          </ListItem>
          <ListItem className={this.props.classes.listItem}>
            <div className={this.props.classes.itemGroupImg}>
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_1_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_2_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
              <img
                className={this.props.classes.itemImg}
                src="assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg"
                alt="product"
              />
            </div>
            <ListItemText
              primary="Jogo de lençol Mirage Dobra Feita Ultra"
              secondary="MIRAGE"
            />
            <ListItemText
              className={this.props.classes.price}
              primary={
                <div>
                  <span className="discount">R$ 489,00 </span>
                  <span className="by">por </span>
                  R$ 239,00
                </div>
              }
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
