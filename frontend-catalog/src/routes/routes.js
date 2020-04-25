 import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import ProductDetail from '../pages/products/detail/index';
import Product from '../pages/products/list/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/products" />
        <Route exact path="/products" component={Product} />
        <Route exact path='/product/:id' component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;