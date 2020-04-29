import React, { Component } from 'react';
import './style.css';

import { CustomInput, CustomButton } from '../../components/common';
import logo from '../../icons/logo.svg';


class Login extends Component {

  constructor() {
    super();
  }

  render() {

    return (
      <>
        <div className="container login">
          <div className="center aye">
            <div className="card-body">
              <img className="logo" src={logo}></img>
              <form>
                <div>
                  <CustomInput classs="input01" icon="email" type="email" name="email" placeholder="Enter your email" autoComplete="on" />
                  <CustomInput classs="input02" icon="password" type="password" name="password" placeholder="Enter your password" autoComplete="on"/>
                </div>
                <div>
                  <CustomButton typeBtn="submit" className="login-btn btn btn-outlined purple-btn textarea">Login</CustomButton>
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
