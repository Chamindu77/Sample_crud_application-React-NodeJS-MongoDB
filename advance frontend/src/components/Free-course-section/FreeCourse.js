import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development",
    imgUrl: courseImg01,
    lesson: 12,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Building Engineering",
    imgUrl: courseImg02,
    lesson: 10,
    students: 5.3,
    rating: 2.7,
  },
  {
    id: "03",
    title: "Digital Electronics",
    imgUrl: courseImg03,
    lesson: 15,
    students: 5.3,
    rating: 4.0,
  },
  {
    id: "04",
    title: "UI/UX Design",
    imgUrl: courseImg04,
    lesson: 17,
    students: 5.3,
    rating: 3.0,
  },
];

const sectionStyle = {
  padding: "20px 0", // Reduced padding
  marginTop: "50px",
  marginBottom: "-20px",
  position: "relative",
};

const btnStyle = {
  backgroundColor: "#17bf9e",
  border: "none",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  position: "absolute",
  top: "0",
  right: "15px",
};

const FreeCourse = () => {
  return (
    <section style={sectionStyle}>
      <Container>
        <Row className="align-items-center">
          <Col lg="12" className="text-center mb-5 position-relative">
            <h2 className="fw-bold">Our Popular Courses</h2>
            <button style={btnStyle}>See All</button>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
