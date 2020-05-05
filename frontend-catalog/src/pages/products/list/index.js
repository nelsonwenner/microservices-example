import React, { Component } from 'react';
import './style.css';

import { CustomButton } from '../../../components/common/CustomButton';
import Product from '../../../components/product/index';
import Order from '../../../components/order/index';
import redirect from '../../../routes/redirect';
import Api from '../../../services/Api';
import Modal from 'react-modal';


class Home extends Component {

  constructor() {
    super();

    this.state = {
      products: [],
      orders: [],
      modal: false
    };
  }

  openModal = () => {
    this.setState({modal: true});
  }

  closeModal = () => {
    this.setState({modal: false});
  }

  async componentWillMount() {
    this.getProducts();
    this.getOrders();
    Modal.setAppElement('body');
  }

  async getProducts() {
    const { data } = await Api.get('/products/');
    this.setState({ products: data });
  }

  async getOrders() {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    const { data } = await Api.post('/orders/', credentials);
    this.setState({ orders: data });
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
            onClick={ this.openModal }
            className="login-btn btn btn-outlined purple-btn textarea">
            My Orders
          </CustomButton>

          <CustomButton
            typeBtn="button"
            onClick={ this.handlerClick }
            className="login-btn btn btn-outlined purple-btn textarea">
            Logout
          </CustomButton>

        </div>

        <Product
          data={ this.state.products }
        />

        <Modal
          isOpen={this.state.modal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal">

          <CustomButton
            typeBtn="button"
            onClick={ this.closeModal }
            className="login-btn btn btn-outlined purple-btn textarea modelButton">
            Close
          </CustomButton>

          <Order
            orders={ this.state.orders }
            products={ this.state.products }
          />

        </Modal>
      </>
    );
  }
}

export default Home;
