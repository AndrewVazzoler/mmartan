import { all, call, fork, put, takeEvery, select } from 'redux-saga/effects';
import { ProductsActionTypes } from './types';
import {
  fetchError,
  fetchSuccess,
  changePerPagesSuccess,
  fetchRequest,
  chargePageSuccess,
  fetchSearchSuccess
} from './actions';
import { callApi, API_ENDPOINT } from '../../utils/api';

function* handleFetch() {
  const { navPages, search } = yield select(state => state.products);
  const endpoint = `/v1/products?page=${navPages.page}&limit=${
    navPages.limit
  }&search=${search}`;
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, endpoint);
    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(fetchSuccess(res.body));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!));
    } else {
      yield put(fetchError('Ocorreu um erro desconhecido.'));
    }
  }
}

function* chargePerPages(action: any) {
  yield put(changePerPagesSuccess(action.payload));
  yield put(fetchRequest());
}

function* chargePage(action: any) {
  yield put(chargePageSuccess(action.payload));
  yield put(fetchRequest());
}

function* handleFetchSearch(action: any) {
  yield put(fetchSearchSuccess(action.payload));
  yield put(fetchRequest());
}

function* watchFetchRequest() {
  yield takeEvery(ProductsActionTypes.FETCH_REQUEST, handleFetch);
  yield takeEvery(ProductsActionTypes.CHARGE_PERPAGES, chargePerPages);
  yield takeEvery(ProductsActionTypes.CHARGE_PAGE, chargePage);
  yield takeEvery(ProductsActionTypes.FETCH_SEARCH, handleFetchSearch);
}

function* heroesSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default heroesSaga;
