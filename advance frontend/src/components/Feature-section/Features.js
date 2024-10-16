import React from "react";
import { Container, Row, Col } from "reactstrap";
import 'remixicon/fonts/remixicon.css';

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "At CN University, we focus on efficient learning with innovative teaching methods and expert faculty. Experience accelerated learning with our cutting-edge resources and technology",
    icon: "ri-draft-line",
  },
  {
    title: "All Time Support",
    desc: "At CN University, we focus on efficient learning with innovative teaching methods and expert faculty. Experience accelerated learning with our cutting-edge resources and technology",
    icon: "ri-discuss-line",
  },
  {
    title: "Certification",
    desc: "At CN University, we focus on efficient learning with innovative teaching methods and expert faculty. Experience accelerated learning with our cutting-edge resources and technology",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  const featureContainerStyle = {
    textAlign: "center",
    padding: "1rem",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  };

  const titleStyle = {
    fontWeight: 600,
    marginBottom: "1rem",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    color: "#333",
  };

  const sectionStyle = {
    padding: "20px 0", // Reduced padding
    marginTop: "50px",
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div style={featureContainerStyle}>
                <h2 style={iconStyle}>
                  <i className={item.icon}></i>
                </h2>
                <h6 style={titleStyle}>{item.title}</h6>
                <p style={descriptionStyle}>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
