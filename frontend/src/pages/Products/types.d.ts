import { Productsn, NavPages } from '../../store/products/types';
import { ConnectedReduxProps } from '../../store';
export type Props = {
  loading: boolean;
  data: Products;
  search: string;
  errors?: string;
  navPages: NavPages;
};

export type State = {};

export interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
  changePerPages: typeof changePerPages;
  changePage: typeof changePage;
  fetchSearch: typeof fetchSearch;
}

export type AllProps = Props & PropsFromDispatch & ConnectedReduxProps;
