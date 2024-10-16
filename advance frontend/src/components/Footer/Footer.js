import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import 'remixicon/fonts/remixicon.css';


const footerQuickLinks = [
  { display: "Home", url: "#" },
  { display: "About Us", url: "#" },
  { display: "Courses", url: "#" },
  { display: "Blog", url: "#" },
];

const footerInfoLinks = [
  { display: "Privacy Policy", url: "#" },
  { display: "Membership", url: "#" },
  { display: "Purchases Guide", url: "#" },
  { display: "Terms of Service", url: "#" },
];

const Footer = () => {
  const footerStyle = {
    background: "rgba(226, 248, 248, 0.664)",
    padding: "2rem 0",
  };

  const followsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const followLinkStyle = {
    textDecoration: "none",
    color: "#0a2b1e",
    fontWeight: 500,
    marginRight: "15px",
  };

  const linkItemStyle = {
    background: "transparent",
    paddingLeft: 0,
    border: "none",
    padding: "0.5rem 0", // Adding some padding for better spacing
  };

  const linkListStyle = {
    listStyle: "none",
    padding: 0,
  };

  const titleStyle = {
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <i className="ri-pantone-line"></i> CN University
            </h2>
            <div>
              <p style={{ marginBottom: "0.5rem", }}>Follow us on social media</p>
              <div style={followsStyle}>
                <a href="https://facebook.com" style={followLinkStyle}>
                  <i className="ri-facebook-line"></i>
                </a>
                <a href="https://instagram.com" style={followLinkStyle}>
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://linkedin.com" style={followLinkStyle}>
                  <i className="ri-linkedin-line"></i>
                </a>
                <a href="https://twitter.com" style={followLinkStyle}>
                  <i className="ri-twitter-line"></i>
                </a>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 style={titleStyle}>Explore</h6>
            <ListGroup style={linkListStyle}>
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} style={linkItemStyle}>
                  <a href={item.url} style={followLinkStyle}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 style={titleStyle}>Information</h6>
            <ListGroup style={linkListStyle}>
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} style={linkItemStyle}>
                  <a href={item.url} style={followLinkStyle}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 style={titleStyle}>Get in Touch</h6>
            <p>Address: Galle, Sri Lanka</p>
            <p>Phone: +94 717172985</p>
            <p>Email: cnuniversity@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
