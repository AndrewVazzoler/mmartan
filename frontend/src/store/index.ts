import { combineReducers, Dispatch, Action, AnyAction, Reducer } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';

import productsSaga from './products/sagas';
import { productsReducer } from './products/reducer';
import { ProductsState } from './products/types';

// O objeto de estado de nível superior
export interface ApplicationState {
  products: ProductsState;
  router: RouterState;
}

/**
 * Adereços adicionais para componentes React conectados.
 * Este prop é passado por padrão com `connect()`
 */
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

/**
 * Sempre que uma ação é despachada, o Redux atualizará cada propriedade de
 * estado do aplicativo de nível superior usando o redutor com o nome correspondente.
 * É importante que os nomes correspondam exatamente e que o redutor atua no
 * tipo de propriedade ApplicationState correspondente.
 */
export const rootReducer = (history: History) =>
  combineReducers<ApplicationState>({
    products: productsReducer,
    router: connectRouter(history)
  });

/**
 * Aqui nós usamos `redux-saga` para acionar ações de forma assíncrona.
 * `redux-saga` usa algo chamado" função geradora ",
 *  sobre o qual você pode ler aqui:
 */
export function* rootSaga() {
  yield all([fork(productsSaga)]);
}
