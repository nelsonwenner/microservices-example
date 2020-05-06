import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const PrivateRouter = ({ isLoggedin, component: Component, ...rest }) => {

  return (
    <Route { ...rest } render={(props) => (
      
      localStorage.getItem('auth') ? (

        <Component { ...props } />

      ) : (

        <Redirect to="/" />

      )

      )}
    />
  )

}


export default PrivateRouter;
