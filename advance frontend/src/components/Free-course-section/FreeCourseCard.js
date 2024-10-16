import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const FreeCourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

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
    padding: "15px",
    border: "2px solid #000000", // Highlight border with #ff color
    borderRadius: "10px",
    marginBottom: "-10px",
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


  const courseDetailstyle ={
    marginBottom: "-15px",
  }

  return (
    <div style={singleCourseItemStyle}>
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" style={courseImgStyle} />
      </div>

      <div className="course__details" style={courseDetailstyle}>
        <h6 className="course__title" style={courseTitleStyle}>{title}</h6>

        <div className="d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1" style={textStyle}>
            <i className="ri-book-open-line" style={iconStyle}></i> {lesson} Lessons
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
          <Link to={`/studentcrud`} >
              <button style={btnStyle}>Enroll</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
