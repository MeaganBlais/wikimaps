import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/shared/NavBar';

//Pages Import
import HomePage from '../components/Pages/Home/Home';
import MapsIndexPage from '../components/Pages/Maps/Index';

const AppRouter = (props) => (
  <div>
    <NavBar />
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/maps' component={MapsIndexPage} />
      </Switch>
    </div>
    </BrowserRouter>
  </div>
);

export default AppRouter;
