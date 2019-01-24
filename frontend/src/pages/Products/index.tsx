import * as React from 'react';
import { connect } from 'react-redux';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import { Dispatch } from 'redux';

import Divider from '@material-ui/core/Divider';

import ListMM from '../../components/List';
import Pagination from '../../components/Pagination';
import PerPage from '../../components/PerPage';
import AppBar from '../../components/AppBar';
import Search from '../../components/Search';
import Breadcrumb from '../../components/Breadcrumb';

import { ApplicationState } from '../../store';

import {
  fetchRequest,
  changePerPages,
  changePage,
  fetchSearch
} from '../../store/products/actions';

import styles from './style';

import { AllProps } from './types';

import withRoot from '../../withRoot';

class Products extends React.Component<AllProps & WithStyles<typeof styles>> {
  public componentWillMount() {
    this.props.fetchRequest();
  }

  perPageChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    this.props.changePerPages(event.target.value);

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar title="mmartan">
          <Search onSearch={this.props.fetchSearch} />
        </AppBar>
        <Breadcrumb title={this.props.search || 'Lista de produtos'} />

        <main className={this.props.classes.content}>
          <span className={this.props.classes.countProducts}>
            {this.props.data.pagination.total} PRODUTOS ENCONTRADOS
          </span>

          <ListMM list={this.props.data.list} />

          <Divider className={this.props.classes.divider} />

          <nav className={this.props.classes.pagination}>
            <PerPage
              handleChange={this.perPageChange}
              value={this.props.navPages.limit}
            />
            <Pagination
              totalRecords={this.props.data.pagination.total}
              pageLimit={this.props.navPages.limit}
              currentPage={this.props.navPages.page}
              pageNeighbours={2}
              onPageChanged={this.props.changePage}
            />
          </nav>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ products }: ApplicationState) => ({
  search: products.search,
  navPages: products.navPages,
  data: products.data
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest()),
  changePerPages: (num: number) => dispatch(changePerPages(num)),
  changePage: (num: number) => dispatch(changePage(num)),
  fetchSearch: (text: string) => dispatch(fetchSearch(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(Products)));
