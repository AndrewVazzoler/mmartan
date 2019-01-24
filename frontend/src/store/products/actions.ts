import { action } from 'typesafe-actions';
import { ProductsActionTypes, Product } from './types';

export const fetchRequest = () => action(ProductsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Product[]) =>
  action(ProductsActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(ProductsActionTypes.FETCH_ERROR, message);

export const changePerPages = (data: number) =>
  action(ProductsActionTypes.CHARGE_PERPAGES, data);

export const changePerPagesSuccess = (data: any) =>
  action(ProductsActionTypes.CHARGE_PERPAGES_SUCCESS, data);

export const changePage = (page: number) =>
  action(ProductsActionTypes.CHARGE_PAGE, page);

export const chargePageSuccess = (data: number) =>
  action(ProductsActionTypes.CHARGE_PAGE_SUCCESS, data);

export const fetchSearch = (text: string) =>
  action(ProductsActionTypes.FETCH_SEARCH, text);

export const fetchSearchSuccess = (text: string) =>
  action(ProductsActionTypes.FETCH_SEARCH_SUCCESS, text);
