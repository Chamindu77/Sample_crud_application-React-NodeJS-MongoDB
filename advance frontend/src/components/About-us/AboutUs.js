import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";

const AboutUs = () => {
  const counterStyle = {
    fontSize: '2rem',
    fontWeight: 600,
    color: '#0a2b1e'
  };

  const counterTitleStyle = {
    fontSize: '1rem',
    color: '#0a2b1e',
    fontWeight: 500
  };

  const aboutContentStyle = {
    paddingLeft: '50px'
  };

  const aboutImgStyle = {
    borderRadius: '15px'
  };

  const aboutContentHeadingStyle = {
    fontWeight: 600
  };

  const sectionStyle = {
    marginTop: '50px' // Adjust the value as needed
  };

  return (
    <section>
      <Container >
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" style={aboutImgStyle} />
            </div>
          </Col>

          <Col lg="6" md="6" style={sectionStyle}>
            <div className="about__content" style={aboutContentStyle}>
              <h2 style={aboutContentHeadingStyle}>About Us</h2>
              <p>
              Welcome to CN University, where excellence meets innovation! Our diverse programs and world-class faculty are dedicated to providing a transformative educational experience. Join us and become part of a vibrant community committed to making a positive impact on the world.

              </p>

              <div className="about__counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter" style={counterStyle}>
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title" style={counterTitleStyle}>Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter" style={counterStyle}>
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title" style={counterTitleStyle}>Patient Around World</p>
                  </div>
                </div>

                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter" style={counterStyle}>
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title" style={counterTitleStyle}>Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter" style={counterStyle}>
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title" style={counterTitleStyle}>Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
