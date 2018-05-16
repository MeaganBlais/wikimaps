import React from 'react';
import { Button } from 'reactstrap';

export default () => (
  <div className="navBar">
    <h3>WikiMaps</h3>
    <div>
      <Button color="success">Login</Button>{' '}
      <Button color="success">Register</Button>{' '}
    </div>
  </div>
);