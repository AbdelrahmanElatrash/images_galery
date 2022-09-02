
import React from 'react';
import {Navbar} from 'react-bootstrap' ;
import { propTypes } from 'react-bootstrap/esm/Image';

const Header = (prope)=> {
    const {title} = prope;
    return (
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Navbar>
    )
};

export default Header ;