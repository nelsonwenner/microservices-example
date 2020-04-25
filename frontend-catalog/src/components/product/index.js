import React, { Component } from 'react';
import './style.css';

import redirect from '../../routes/redirect';

class Product extends Component {
    
  constructor(props) {
    super(props);
  }

  onSubmit(id) {
    redirect(`/product/${id}`);
  }
  
  render() {
    return (
      <div className="flex-container">
        {   
          this.props.product.map(data => (
            <div className="card-flex" key={ data.product_id } onClick={() => this.onSubmit(data.product_id)}>
              <div className="card-title">
                {data.product}
              </div>
              <div className="card-price">
                $ {data.price}
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Product;