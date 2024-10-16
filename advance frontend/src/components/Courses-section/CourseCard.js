import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const CourseCard = (props) => {
  const { id, imgUrl, department, lesson, students, rating } = props.item;
  const navigate = useNavigate();


  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars).fill(<FaStar color="#ffd700" />)}
        {halfStars === 1 && <FaStarHalfAlt color="#ffd700" />}
        {Array(emptyStars).fill(<FaRegStar color="#ffd700" />)}
      </>
    );
  };

  const singleCourseItemStyle = {
    padding: "20px",
    border: "2px solid #000000", 
    borderRadius: "10px",
    marginBottom: "40px",
  };

  const courseImgStyle = {
    borderRadius: "10px",
    marginBottom: "10px",
  };



  const textStyle = {
    fontSize: "0.9rem",
    color: "#0a2b1e",
    fontWeight: 500,
  };

  const iconStyle = {
    fontWeight: 400,
  };

  const courseDetailstyle = {
    marginBottom: "-15px",
  }

  const courseTitleStyle = {
    lineHeight: "2rem",
    marginBottom: "10px",
  };

  const btnStyle = {
    backgroundColor: "#17bf9e",
    border: "none",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleDepCardClick = () => {
  
    if (id === '01') {
      
      navigate('/allcoursepagecom', { state: { department } });
    }else if (id === '02') {
        
        navigate('/allcoursepageelec', { state: { department } });
    } else {
      
      navigate('/allcoursepagecivil', { state: { department } });
    }
  }

  return (
    <div style={singleCourseItemStyle} onClick={handleDepCardClick}>
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" style={courseImgStyle} />
      </div>

      <div className="course__details" style={courseDetailstyle}>
        <h6 className="course__title" style={courseTitleStyle}>{department}</h6>

        <div className="d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1" style={textStyle}>
            <i className="ri-book-open-line" style={iconStyle}></i> {lesson} Courses
          </p>

          <p className="students d-flex align-items-center gap-1" style={textStyle}>
            <i className="ri-user-line" style={iconStyle}></i> {students}K
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1" style={textStyle}>
            {renderStars(rating)}
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <button style={btnStyle}>See All</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
