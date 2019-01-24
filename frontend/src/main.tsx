import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Store } from 'redux';

import Routes from './routes';
import { ApplicationState } from './store';

interface OwnProps {
  store: Store<ApplicationState>;
  history: History;
}

interface PropsFromDispatch {
  [key: string]: any;
}

type AllProps = OwnProps & PropsFromDispatch;

class Main extends React.Component<AllProps> {
  public render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Main;
