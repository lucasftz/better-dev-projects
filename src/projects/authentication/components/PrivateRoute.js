import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-contexts';

function PrivateRoute({ children, ...rest }) {
  const auth0 = useAuth0();

  if (!auth0.isAuthenticated && !auth0.user) {
    return auth0.login();
  }

  return <Route {...rest}>{children}</Route>
};

export default PrivateRoute