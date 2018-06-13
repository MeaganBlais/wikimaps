import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/shared/NavBar';

//Pages Import
import HomePage from '../components/Pages/Home/Home';
import MapsIndexPage from '../components/Pages/Maps/Index';
import MapsCreatePage from '../components/Pages/Maps/Create';

const AppRouter = (props) => (
  <div>
    <NavBar />
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/maps' component={MapsIndexPage} />
        <Route exact path='/maps' component={MapsIndexPage} />
        <Route exact path='/maps/create' component={MapsCreatePage} />
      </Switch>
    </div>
    </BrowserRouter>
  </div>
);

export default AppRouter;
