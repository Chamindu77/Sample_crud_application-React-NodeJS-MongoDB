import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

function NavigationBar2() {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from local storage
    window.location.href = '/'; // Redirect to login page
  };

  

  return (
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary" >
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
            <Nav.Link href="/studentcrud">Home</Nav.Link>
            <Nav.Link href="/studentcrud">Courses</Nav.Link>
            <Nav.Link href="/studentcrud">About</Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center">          
            <Button variant="success" className="me-3" onClick={handleLogout}>
              Logout
            </Button>          
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar2;
