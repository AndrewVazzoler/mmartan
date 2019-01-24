import { Reducer } from 'redux';
import { ProductsState, ProductsActionTypes } from './types';

const initialState: ProductsState = {
  data: {
    list: [
      {
        name: '',
        subName: '',
        price: '',
        discount: '',
        images: []
      }
    ],
    pagination: {
      total: 0,
      limit: 0,
      offset: 0,
      hasPrevPage: false,
      hasNextPage: false,
      page: 1,
      pages: 1,
      prev: 0,
      next: 0
    }
  },
  navPages: {
    limit: 5,
    page: 1
  },
  search: '',
  errors: undefined,
  loading: false
};

const reducer: Reducer<ProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }

    case ProductsActionTypes.FETCH_SUCCESS: {
      const { result, ...pagination } = action.payload;
      return {
        ...state,
        data: { list: action.payload.result, pagination }
      };
    }

    case ProductsActionTypes.FETCH_ERROR: {
      return { ...state, errors: action.payload };
    }

    case ProductsActionTypes.CHARGE_PERPAGES: {
      return {
        ...state
      };
    }
    case ProductsActionTypes.CHARGE_PERPAGES_SUCCESS: {
      return {
        ...state,
        navPages: { page: 1, limit: action.payload }
      };
    }

    case ProductsActionTypes.CHARGE_PAGE: {
      return {
        ...state
      };
    }
    case ProductsActionTypes.CHARGE_PAGE_SUCCESS: {
      return {
        ...state,
        navPages: { ...state.navPages, page: action.payload.currentPage }
      };
    }

    case ProductsActionTypes.FETCH_SEARCH: {
      return {
        ...state,
        navPages: { ...state.navPages, page: 1 }
      };
    }
    case ProductsActionTypes.FETCH_SEARCH_SUCCESS: {
      return {
        ...state,
        search: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer as productsReducer };
