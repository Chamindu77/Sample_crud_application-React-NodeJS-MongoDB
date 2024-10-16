import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import AllFreeCourseCard from "./AllFreeCourseCard";
import { useLocation } from "react-router-dom";



const AllFreeCourseData = [
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
    title: "Basic UI/UX Design",
    imgUrl: courseImg04,
    lesson: 17,
    students: 5.3,
    rating: 3.0,
  },

  {
    id: "01",
    title: "Web Development",
    imgUrl: courseImg01,
    lesson: 12,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Services Engineering",
    imgUrl: courseImg02,
    lesson: 10,
    students: 5.3,
    rating: 2.7,
  },
  {
    id: "03",
    title: "Logic Design",
    imgUrl: courseImg03,
    lesson: 15,
    students: 5.3,
    rating: 4.0,
  },
  {
    id: "04",
    title: "Basic Figma",
    imgUrl: courseImg04,
    lesson: 17,
    students: 5.3,
    rating: 3.0,
  },

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
    title: "Building Services",
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
    title: "Basic UI/UX Design",
    imgUrl: courseImg04,
    lesson: 17,
    students: 5.3,
    rating: 3.0,
  },

  {
    id: "05",
    title: "Web Development Course",
    imgUrl: courseImg01,
    lesson: 12,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "06",
    title: "Building Engineering",
    imgUrl: courseImg02,
    lesson: 10,
    students: 5.3,
    rating: 2.7,
  },
  {
    id: "07",
    title: "Digital Electronics",
    imgUrl: courseImg03,
    lesson: 15,
    students: 5.3,
    rating: 4.0,
  },
  {
    id: "08",
    title: "Basic UI/UX Design",
    imgUrl: courseImg04,
    lesson: 17,
    students: 5.3,
    rating: 3.0,
  },
];

const sectionStyle = {
  padding: "20px 0", 
  marginTop: "50px",
  marginBottom: "-20px",
  position: "relative",
};


const AllFreeCourse = () => {

  const location = useLocation();
  const { department } = location.state || { department: "" };

  useEffect(() => {
  }, [department]);


  return (
    <section style={sectionStyle}>
      <Container>
        <Row className="align-items-center">
          <Col lg="12" className="text-center mb-5 position-relative">
            <h2 className="fw-bold">Courses - Department of Computer Engineering</h2>

          </Col>

          {AllFreeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <AllFreeCourseCard item={item} department={department} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AllFreeCourse;
