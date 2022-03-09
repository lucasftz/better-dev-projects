import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Authentication.css';
// components
import SiteHeader from './components/SiteHeader';
import PrivateRoute from './components/PrivateRoute';
// pages
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function AuthenticationInner() {

  return (
    <Router>
      <div className="authentication">
        {/* site header */}
        <SiteHeader />

        {/* routes */}
        <Switch>
          <PrivateRoute path="/authentication/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/authentication" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export { AuthenticationInner }