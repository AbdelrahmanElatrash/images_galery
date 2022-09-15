import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron className="mt-4">
    <h1>Images Gallery</h1>
    <p>
      this is a simple application that retrives photo using unsplash api. in
      order to start enter any term in the input field
    </p>
    <p>
      <Button
        variant="primary"
        herf="https://unsplash.com"
        target="_blank"
      ></Button>
    </p>
  </Jumbotron>
);

export default Welcome;
