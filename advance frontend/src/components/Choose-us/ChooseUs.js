import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import chooseImg from "../../assests/images/why-choose-us.png";
//import { MdMargin } from "react-icons/md";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);

  const chooseContentStyle = {
    paddingRight: "50px",
    marginTop: "120px",
  };

  const chooseContentHeadingStyle = {
    fontWeight: 600,
  };

  const chooseImgStyle = {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 777,
  };

  const imgStyle = {
    borderRadius: "15px",
  };

  const playIconStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    zIndex: 7777,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const playIconInnerStyle = {
    color: "#17bf9e",
    fontSize: "2rem",
    padding: "10px",
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div style={chooseContentStyle}>
              <h2 style={chooseContentHeadingStyle}>Why Choose Us</h2>
              <p>
                At CN University, we provide an exceptional educational experience with world-class faculty and cutting-edge facilities. Our diverse programs are designed to meet today's job market demands, and our vibrant campus life offers numerous extracurricular opportunities. With strong career support, we are committed to helping you achieve your professional goals. Join us and embark on a journey of knowledge, innovation, and excellence.
              </p>


            </div>
          </Col>

          <Col lg="6" md="6">
            <div style={chooseImgStyle}>
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=eweqryzOa6I"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" style={imgStyle} />
              )}

              {!showVideo && (
                <span style={playIconStyle} onClick={() => setShowVideo(!showVideo)}>
                  <i className="ri-play-circle-line" style={playIconInnerStyle}></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
