import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg01 from "../../assests/images/web-development.png";
//import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import AllFreeCourseCardElec from "./AllFreeCourseCardElec";
import CourseCarousel from "./CourseCarousel"; // Import the carousel component
import { useLocation } from "react-router-dom";


const AllFreeCourseDataElec = [
  {
    id: "25",
    title: "Digital Electronics",
    imgUrl: courseImg01,
    lesson: 12,
    students: 5.3,
    rating: 1.7,
  },
  
  {
    id: "26",
    title: "Digital Electronics",
    imgUrl: courseImg03,
    lesson: 15,
    students: 5.3,
    rating: 4.0,
  },
  {
    id: "27",
    title: "Electronics Logic",
    imgUrl: courseImg04,
    lesson: 17,
    students: 5.3,
    rating: 3.0,
  },

  {
    id: "28",
    title: "Logic Design",
    imgUrl: courseImg01,
    lesson: 12,
    students: 5.3,
    rating: 1.7,
  },
  
  {
    id: "29",
    title: "Digital Electronics",
    imgUrl: courseImg03,
    lesson: 15,
    students: 5.3,
    rating: 4.0,
  },
  
];

const sectionStyle = {
  padding: "20px 0", // Reduced padding
  marginTop: "50px",
  marginBottom: "-20px",
  position: "relative",
};



const AllFreeCourseElec = () => {

  const location = useLocation();
  const { department } = location.state || { department: "" };

  return (
    <section style={sectionStyle}>
      <CourseCarousel /> 
      <Container>
        <Row className="align-items-center">
          <Col lg="12" className="text-center mb-5 position-relative">
            <h2 className="fw-bold">Courses - Department of Electrical Engineering</h2>
            
          </Col>

          {AllFreeCourseDataElec.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <AllFreeCourseCardElec item={item} department={department}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AllFreeCourseElec;
