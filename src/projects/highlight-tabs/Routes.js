import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';

export default function Router() {
  return (
    <Switch>
      <Route path="/highlight-tabs/about">
        <About />
      </Route>
      <Route path="/highlight-tabs/features">
        <Features />
      </Route>
      <Route path="/highlight-tabs" exact={true}>
        <Home />
      </Route>
    </Switch>
  );
}
