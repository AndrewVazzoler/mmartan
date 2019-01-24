import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import InputBase from '@material-ui/core/InputBase';

import styles from './style';
import { Props, State } from './types';

import withRoot from '../../withRoot';

class Search extends React.Component<Props & WithStyles<typeof styles>, State> {
  state = {
    clean: false,
    value: ''
  };

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const clean = !!event.target.value;
    const value = event.target.value;
    this.props.onSearch(value);
    this.setState({ value, clean });
  };
  handleInputClean = () => {
    this.props.onSearch('');
    this.setState({ value: '', clean: false });
  };
  render() {
    return (
      <div className={this.props.classes.search}>
        <div className={this.props.classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={this.handleInputChange}
          value={this.state.value}
          placeholder="Pesquisar..."
          classes={{
            root: this.props.classes.inputRoot,
            input: this.props.classes.inputInput
          }}
        />
        {this.state.clean && (
          <a
            href="#"
            className={this.props.classes.searchClean}
            onClick={this.handleInputClean}
          >
            <CancelIcon className={this.props.classes.iconSearchClean} />
          </a>
        )}
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Search));
