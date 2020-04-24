import React, { Component } from 'react';
import './style.css';

class Product extends Component {
    
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex-container">
        {   
          this.props.product.map(data => (
            <div className="card-flex" key={ data.product_id }>
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

export default Product