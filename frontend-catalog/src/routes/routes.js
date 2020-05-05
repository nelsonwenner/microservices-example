 import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductDetail from '../pages/products/detail/index';
import Product from '../pages/products/list/index';
import PrivateRouter from './PrivateRouter';
import Login from '../pages/login/index';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Login} />

        <PrivateRouter exact path="/products" component={ Product } />

        <PrivateRouter exact path="/product/:id" component={ ProductDetail } />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
