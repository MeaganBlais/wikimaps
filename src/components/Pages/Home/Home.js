import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <NavLink exact to='/maps' activeClassName="selected">Go to maps</NavLink>
  </div>
);

export default Home;