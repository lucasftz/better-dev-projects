import React, { createContext, useState, useEffect } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

const Auth0Context = createContext();

function Auth0Provider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [auth0Client, setAuth0Client] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initAuth0();

    async function initAuth0() {
      const auth0 = await createAuth0Client({
        domain: 'dev-0kausynv.us.auth0.com',
        client_id: 'WfcCidddR9i47wvtME4tOcqzQON7meQ2',
        redirect_uri: window.location.origin
      });

      setAuth0Client(auth0);

      // handle redirect when client returns
      if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
        try {
          await auth0.handleRedirectCallback();
        } catch (error) {
          alert(error);
        }
        window.location.replace(window.location.pathname);
      }

      // check if user is authenticated
      const isAuthenticated = await auth0.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      // grab the user
      if (isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }

      // stop loading
      setIsLoading(false);
    };
  }, []);

  return (
    <Auth0Context.Provider value={{
        isAuthenticated: isAuthenticated,
        user: user,
        isLoading: isLoading,
        login: (...props) => auth0Client.loginWithRedirect(...props)
      }}>
      {children}
    </Auth0Context.Provider>
  );
};

export { Auth0Context, Auth0Provider }
