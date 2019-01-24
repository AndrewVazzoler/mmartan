import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './pages/Products';

const Routes: React.SFC = () => <Route exact path="/" component={Products} />;

export default Routes;
