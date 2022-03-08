import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// pages
import SiteHeader from './components/SiteHeader';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
// context
import { Auth0Context } from './contexts/auth0-context';
// SPA client
import createAuth0Client from '@auth0/auth0-spa-js';

export default function App() {
  const auth0 = useContext(Auth0Context);

  // initialize auth0 on initial render
  useEffect(() => {
    initAuth0();

    async function initAuth0() {
      const auth0 = await createAuth0Client({
        domain: 'dev-0kausynv.us.auth0.com',
        client_id: 'WfcCidddR9i47wvtME4tOcqzQON7meQ2'
      });
    };
  }, []);

  return (
    <Router>
      <div className="app">
        {/* site header */}
        <SiteHeader />

        {/* routes */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
