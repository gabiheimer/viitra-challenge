import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/detalhes/:id" exact render={(routeProps) => <Details {...routeProps}/>}/>
  </Switch>
);

export default Routes;
