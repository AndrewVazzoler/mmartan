import * as React from 'react';

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './style';
import { Props, State } from './types';

import withRoot from '../../withRoot';

class PerPage extends React.Component<
  Props & WithStyles<typeof styles>,
  State
> {
  state = {
    perPage: 10
  };

  render() {
    const { label, name, id, value, handleChange } = this.props;

    return (
      <FormControl className={this.props.classes.formControl}>
        <InputLabel htmlFor="perPage">{label}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          inputProps={{
            name: name || 'perPage',
            id: id || 'perPage'
          }}
        >
          <MenuItem value={5}>5 produtos por página</MenuItem>
          <MenuItem value={10}>10 produtos por página</MenuItem>
          <MenuItem value={20}>20 produtos por página</MenuItem>
          <MenuItem value={30}>30 produtos por página</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withRoot(withStyles(styles)(PerPage));
