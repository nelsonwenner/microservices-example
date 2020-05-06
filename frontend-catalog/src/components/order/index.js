import React from 'react';

import { formatDate } from '../../utils/utils';


const Order = ({ orders, products }) => {
  return (
    <div className="flex-container">
      {
        orders.map((order) => {
          const product = products.filter((product) => order.product_id === product.product_id);

          return product.map(data => (
            <div className="card-flex" key={ data }>
              <div className="card-title">
                { data.product }
              </div>
              <div className="card-price">
                Status <br/> { order.status }
              </div>
              <div style={{ paddingTop: 10 }}>
                { formatDate(order.createdAt) }
              </div>
            </div>
          ))
        })
      }
    </div>
  );
}

export default Order;
