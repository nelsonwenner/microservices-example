 import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import ProductDetail from '../pages/products/detail/index';
import Product from '../pages/products/list/index';
import Login from '../pages/login/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/products" component={Product} />
        <Route exact path='/product/:id' component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

/*
<Redirect exact from="/" to="/products" />
*/
