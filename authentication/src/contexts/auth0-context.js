import React, { createContext } from 'react';

const Auth0Context = createContext();

function Auth0Provider({ children }) {
  return (
    <Auth0Context.Provider>
      {children}
    </Auth0Context.Provider>
  );
};

export { Auth0Context, Auth0Provider }
