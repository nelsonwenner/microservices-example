import React, { Component } from 'react';
import './style.css';

import { CustomInput, CustomButton } from '../../../components/common';
import Api from '../../../services/Api';
import Spinner from 'react-spinkit';


class ProductDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      product: '',
      loading: false,
      success: null,
      message: null,
      error: null
    };
  }

  componentWillMount() {
    this.getProduct(this.props.match.params.id);
  }

  async getProduct(id) {
    const { data } = await Api.get(`/products/${id}/`);
    this.setState({ product: data });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    if(!email || !password) {
      this.setState(() => ({ error: {text: 'Fill in all the fields', color: 'red'}}));
    } else {
      this.setState({loading: true});
      Api.post('/checkouts/', {email: email, password: password, product_id: this.props.match.params.id})
      .then((res) => {

        setTimeout(() => {
          this.setState({success: res.data, message: {text: 'Success Checkout', color: 'green'}, error: null, loading: false, email: '', password: '' });
        }, 5000)

      })
      .catch(() => this.setState({message: {text: 'Failure Checkout', color: 'red'}, loading: false, email: '', password: '' }))
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value});
  }

  render() {
    const { email, password, loading, success, message, error } = this.state;
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

        <div className="container loginn">
          <div className="center aye">
            <div className="card-bodyy">
              <form onSubmit={ this.onSubmit }>
                <div>
                  <CustomInput
                    classs="input01"
                    icon="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="on"
                    value={ email }
                    onChange={ this.handleChange }
                  />

                  <CustomInput
                    classs="input02"
                    icon="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="on"
                    value={ password }
                    onChange={ this.handleChange }
                  />
                </div>

                {
                  loading ? (

                    <div>
                      <Spinner className="center-spinner" name="circle" />
                    </div>

                  ) : (

                    <CustomButton
                      typeBtn="submit"
                      className="login-btn btn btn-outlined purple-btn textarea">
                      Checkout
                    </CustomButton>

                  )
                }

                {
                  success && (

                    <div style={{ paddingTop: 10 }}>
                      <p style={{color: message.color}}>{ message.text }</p>
                    </div>

                  )
                }

                {
                  error && (

                    <div style={{ paddingTop: 10 }}>
                      <p style={{color: error.color}}>{ error.text }</p>
                    </div>

                  )
                }

              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProductDetail;
