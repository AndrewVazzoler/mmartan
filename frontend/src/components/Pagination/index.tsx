import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import {
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage
} from '@material-ui/icons';

import styles from './style';
import { Props, State } from './types';
import { fetchPageNumbers } from './functions';

import withRoot from '../../withRoot';

class Pagination extends React.Component<
  Props & WithStyles<typeof styles>,
  State
> {
  private totalPages: number;

  constructor(props: Props & WithStyles<typeof styles>) {
    super(props);
    this.totalPages = Math.ceil(this.props.totalRecords / this.props.pageLimit);
  }

  gotoPage = (page: number) => {
    const { onPageChanged = (f: Function) => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.props.pageLimit,
      totalRecords: this.props.totalRecords
    };
    onPageChanged(paginationData);
  };

  handleClick = (page: number) => (evt: React.MouseEvent) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveFirst = (evt: React.MouseEvent) => {
    evt.preventDefault();
    this.gotoPage(1);
  };

  handleMoveLast = (evt: React.MouseEvent) => {
    evt.preventDefault();
    this.gotoPage(this.totalPages);
  };

  handleMoveLeft = (evt: React.MouseEvent) => {
    evt.preventDefault();
    this.gotoPage(this.props.currentPage - 1);
  };

  handleMoveRight = (evt: React.MouseEvent) => {
    evt.preventDefault();
    this.gotoPage(this.props.currentPage + 1);
  };

  render() {
    this.totalPages = Math.ceil(this.props.totalRecords / this.props.pageLimit);

    if (!this.props.totalRecords || this.totalPages === 1) return null;

    const pages = fetchPageNumbers(
      this.totalPages,
      this.props.currentPage,
      this.props.pageNeighbours
    );

    const hasFirst = this.props.currentPage > 1;
    const hasLast = this.props.currentPage == this.totalPages;

    return (
      <>
        <ul className={this.props.classes.pagination}>
          <li className="page-item">
            <a
              className={`page-link ${hasFirst || 'disabled'}`}
              href=""
              aria-label="Previous"
              onClick={this.handleMoveFirst}
            >
              <FirstPage />
            </a>
          </li>

          <li className="page-item">
            <a
              className={`page-link ${hasFirst || 'disabled'}`}
              href="#"
              aria-label="Previous"
              onClick={this.handleMoveLeft}
            >
              <ChevronLeft />
            </a>
          </li>
          {pages.map((page, index) => {
            return (
              <li
                key={index}
                className={`page-item${
                  this.props.currentPage === page ? ' active' : ''
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={this.handleClick(Number(page))}
                >
                  {page}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <a
              className={`page-link ${hasLast ? 'disabled' : ''}`}
              href="#"
              aria-label="Next"
              onClick={this.handleMoveRight}
            >
              <ChevronRight />
            </a>
          </li>
          <li className="page-item">
            <a
              className={`page-link ${hasLast ? 'disabled' : ''}`}
              href="#"
              aria-label="Next"
              onClick={this.handleMoveLast}
            >
              <LastPage />
            </a>
          </li>
        </ul>
      </>
    );
  }
}
export default withRoot(withStyles(styles)(Pagination));
