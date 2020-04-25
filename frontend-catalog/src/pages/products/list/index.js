import React, { Component } from 'react';
import './style.css';

import Api from '../../../services/Api';
import Product from '../../../components/product/index';


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

  render() {
    return (
      <>  
        <div className="title">
          <h1>Products</h1>
        </div>
        
        <Product product={this.state.products}></Product>
      </>
    );
  }
}

export default Home;