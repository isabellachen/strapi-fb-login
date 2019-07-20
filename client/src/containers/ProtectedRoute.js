import React from 'react';
import { Redirect, Route } from 'react-router';
import auth from '../utils/auth';
import url from '../url';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const renderComponent = props => {
    return auth.getToken() !== null ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: url.auth.login, state: { from: props.location } }}
      />
    );
  };
  return <Route {...rest} render={renderComponent} />;
};

export default ProtectedRoute;
