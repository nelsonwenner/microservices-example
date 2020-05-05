import React, { Component } from 'react';
import './style.css';

import { CustomButton } from '../../../components/common/CustomButton';
import Product from '../../../components/product/index';
import redirect from '../../../routes/redirect';
import Api from '../../../services/Api';


class Home extends Component {

  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentWillMount() {
    this.getProducts();
  }

  async getProducts() {
    const { data } = await Api.get('/products/');
    this.setState({ products: data });
  }

  handlerClick = () => {
    localStorage.removeItem('auth');
    redirect("/");
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>Products</h1>

          <CustomButton
            typeBtn="button"
            onClick={ this.handlerClick }
            className="login-btn btn btn-outlined purple-btn textarea">
            Logout
          </CustomButton>

        </div>

        <Product
          product={ this.state.products }
        />
      </>
    );
  }
}

export default Home;
