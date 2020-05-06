import React from 'react';
import './style.css';

import redirect from '../../routes/redirect';


const Product = ({ dataProduct }) => {
  return (
    <div className="flex-container">
      {
        dataProduct.map(data => (
          <div className="card-flex" key={ data.product_id } onClick={() => onSubmit(data.product_id)}>
            <div className="card-title">
              {data.product}
            </div>
            <div className="card-price">
              $ {data.price}
            </div>

            {
              data.stock ? (

                <div style={{ color: 'rgb(4, 252, 128)' }}>
                  Stock
                </div>

              ) : (

                <div style={{ color: 'red' }}>
                  Stock
                </div>

              )
            }
          </div>
        ))
      }
    </div>
  )
}

const onSubmit = (id) => {
  redirect(`/products/${id}`);
}

export default Product;
