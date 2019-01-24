export type ListProducts = {
  name: string;
  subName: string;
  price: string;
  discount: string;
  images: { name: string; src: string }[];
}[];

export type NavPages = {
  limit: number;
  page: number;
};

export type Pagination = {
  total: number;
  limit: number;
  offset: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page: number;
  pages: number;
  prev?: number;
  next?: number;
};

export type Products = {
  list: ListProducts;
  pagination: Pagination;
};

export interface Product extends ApiResponse {
  data: {
    list: ListProducts;
    pagination?: Pagination;
  };
}

export type ApiResponse = Record<string, any>;

export enum ProductsActionTypes {
  FETCH_REQUEST = '@@products/FETCH_REQUEST',
  FETCH_SUCCESS = '@@products/FETCH_SUCCESS',
  FETCH_ERROR = '@@products/FETCH_ERROR',
  SELECT_Product = '@@products/SELECT_Product',
  SELECTED = '@@products/SELECTED',
  CHARGE_PERPAGES = '@@products/CHARGE_PERPAGES',
  CHARGE_PERPAGES_SUCCESS = '@@products/CHARGE_PERPAGES_SUCCESS',
  CHARGE_PAGE = '@@products/CHARGE_PAGE',
  CHARGE_PAGE_SUCCESS = '@@products/CHARGE_PAGE_SUCCESS',
  FETCH_SEARCH = '@@products/FETCH_SEARCH',
  FETCH_SEARCH_SUCCESS = '@@products/FETCH_SEARCH_SUCCESS'
}

export interface ProductsState {
  readonly loading: boolean;
  readonly data: Products;
  readonly errors?: string;
  readonly navPages: NavPages;
  readonly search: string;
}
