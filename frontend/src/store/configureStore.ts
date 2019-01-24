import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { routerMiddleware } from 'connected-react-router';

/**
 * Nós estaremos usando o Redux Devtools. Nós podemos usar a diretiva
 * `composeWithDevTools()` para que possamos passar nosso middleware
 * junto com ele
 */
import { composeWithDevTools } from 'redux-devtools-extension';

// Se você usar react-router, não esqueça de passar seu tipo de histórico.
import { History } from 'history';

// Importe a interface de estado e nossos reducers/sagas combinados.
import { ApplicationState, rootReducer, rootSaga } from './';

export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  // crie a função de composição para nossos middlewares
  const composeEnhancers = composeWithDevTools({});
  // crie o middleware redux-saga
  const sagaMiddleware = createSagaMiddleware();

  /**
   * Vamos criar nossa loja com os redutores / sagas combinados e o
   * estado inicial do Redux que estaremos passando do nosso ponto de entrada.
   */

  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  // Não se esqueça de executar a saga de raiz e retornar o objeto da loja.
  sagaMiddleware.run(rootSaga);
  return store;
}
