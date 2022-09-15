import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/Images Gallery.svg';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

const Header = (title) => {
  return (
    <Navbar style={navbarStyle} variant="dark">
      <Container>
        <Logo alt={title} style={{ maxWidth: '20rem', maxHeight: '4rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
