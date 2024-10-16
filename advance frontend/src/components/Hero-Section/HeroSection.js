import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";

const HeroSection = () => {
  const heroContentStyle = {
    paddingTop: '80px'
  };

  const heroTitleStyle = {
    fontWeight: 600,
    lineHeight: '55px'
  };

  const searchStyle = {
    width: '50%',
    border: '3px solid #3bcca8',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '50px',
    marginTop: '20px'
  };

  const searchInputStyle = {
    border: 'none',
    outline: 'none',
    padding: '2px 10%'
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content" style={heroContentStyle}>
              <h2 className="mb-4 hero__title" style={heroTitleStyle}>
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <h3>Welcome to CN University</h3>
              <p>
                At CN University, we are committed to providing an outstanding educational experience.
                Our diverse programs and dedicated faculty ensure that every student achieves their full potential.
                Explore our website to learn more about our courses, campus life, and the vibrant community that makes CN University unique.
              </p>
            </div>
            <div className="search" style={searchStyle}>
              <input type="text" placeholder="Search" style={searchInputStyle} />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
