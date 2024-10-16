import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    department: "Department of Computer Engineering",
    lesson: 12,
    students: 12.5,
    rating: 5.0,
    imgUrl: courseImg1,
  },
  {
    id: "02",
    department: "Department of Electrical Engineering",
    lesson: 10,
    students: 12.5,
    rating: 4.2,
    imgUrl: courseImg2,
  },
  {
    id: "03",
    department: "Department of Civil Engineering",
    lesson: 15,
    students: 12.5,
    rating: 3.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  const sectionStyle = {
    padding: "20px 0", // Reduced padding
    marginTop: "50px",
  };

  const courseTopStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0px", // Reduced margin bottom
  };

  const courseTopLeftStyle = {
    width: "50%",
  };



  const paragraphStyle = {
    marginBottom: "10px", // Reduced margin bottom
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <div style={courseTopStyle}>
              <div style={courseTopLeftStyle}>
                <h2 style={{ fontWeight: 600 }}>Our Departments</h2>
                <p style={paragraphStyle}>
                  <p>
                    We are proud to offer a range of dynamic and innovative departments that cater to diverse fields of study. Explore our:
                    <ul>
                      <li>Department of Computer Engineering</li>
                      <li>Department of Electrical Engineering</li>
                      <li>Department of Civil Engineering</li>
                    </ul>
                    Each department is committed to excellence in education, research, and preparing students for successful careers.
                  </p>
                </p>
              </div>


            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6" key={item.id}>
              <CourseCard item={item} />

            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
