import React from 'react';
// app
import { AuthenticationInner } from './Authentication';
// context
import { Auth0Provider } from './contexts/auth0-contexts';

const Authentication = () => {
  return (
    <Auth0Provider>
      <AuthenticationInner />
    </Auth0Provider>
  )
};

export default Authentication