import React, { Component } from 'react';
import './style.css';

import Api from '../../../services/Api';


class ProductDetail extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      product: ''
    };
  }
  
  componentWillMount() {
    this.getProduct(this.props.match.params.id);
  }
  
  async getProduct(id) {
    const { data } = await Api.get(`/products/${id}/`);
    this.setState({ product: data });
  }
  
  render() {
    return (
      <>
        <div className="title">
          <h1>Product</h1>
        </div>
        
        <div className="flex-container">
          { 
            <div className="card-flexx" key={ this.state.product.product_id }>
              <div className="card-title">
                { this.state.product.product }
              </div>
              <div className="card-price">
                $ { this.state.product.price  }
              </div>
            </div>
          }
        </div>
      </>
    )
  }
}

export default ProductDetail;