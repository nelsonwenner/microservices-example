import React, { Component } from 'react';
import './style.css';

import { CustomInput, CustomButton } from '../../components/common';
import logo from '../../icons/logo.svg';
import redirect from '../../routes/redirect';
import NProgress from 'react-nprogress';
import Api from '../../services/Api';


class Login extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      loading: false,
      error: null
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    if(!email || !password) {
      this.setState(() => ({ error: 'Fill in all the fields' }));
    } else {
      NProgress.start();
      Api.base.post('/auth/', {email: email, password: password })
      .then((res) => {
        NProgress.done();
        localStorage.setItem('auth', JSON.stringify(res.data));

        redirect('/products');

      })
      .catch(() => this.onLoginFailure());
    }
  }

  onLoginFailure() {
    this.setState({ loading: false, error: "Authentication failed" });
    NProgress.done();
  }

  onLoginSuccess() {
    this.setState({ loading: false, email: '', password: '' });
    NProgress.done();
  }

  render() {
    const {email, password, error, loading} = this.state;
    return (
      <>
        <div className="container login">
          <div className="center aye">
            <div className="card-body">
              <img className="logo" src={logo}></img>
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

                <div>
                  <CustomButton
                    typeBtn="submit"
                    className="login-btn btn btn-outlined purple-btn textarea">
                    Login
                  </CustomButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
