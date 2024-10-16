import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavigationBarSignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/register');
  };

  const handleSignin = () => {
    navigate('/login');
  };
  

  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="https://mdbgo.com/">
          <img
            src="https://i.pinimg.com/736x/7b/f1/35/7bf13526f9a2cdcd18fb57b46070346b.jpg"
            height="50"
            alt="MDB Logo"
            loading="lazy"
            style={{ marginTop: '-1px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarButtonsExample">
          <i className="fas fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarButtonsExample">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="/studentcrud">About</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            
            <Button variant="success" className="me-3" onClick={handleSignUp}>
              Sign Up
            </Button>
            <Button variant="success" className="me-3" onClick={handleSignin}>
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBarSignUp;
