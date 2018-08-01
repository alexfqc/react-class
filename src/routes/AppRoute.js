import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../pages/home/HomePage';
import ListPage from '../pages/list/ListPage';

const AppRoute = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/list" component={ListPage} />
  </Switch>
);

export default AppRoute;
