
import React from 'react';
import {Navbar,Container} from 'react-bootstrap' ;


const navbarStyle ={
   backgroundColor : 'lightblue'
}

const Header = (prope)=> {
    const {title} = prope;
    return (
        <Navbar style={navbarStyle}  bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
          </Container>
        </Navbar>
    )
};

export default Header ;