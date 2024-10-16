//import React from 'react'
// import axios from 'axios';
// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
//import NavigationBar from "./Navbar"; // Import the Navbar component
import NavigationBar2 from "./Header/Navbarhome";
import { useLocation } from 'react-router-dom';
//import NavigationBar2 from "./Header/Navbarhome";
import { useNavigate } from "react-router-dom";

export default function StudentRegisterForm() {

    const location = useLocation();
    const { title } = location.state || { title: "" };
    const { department } = location.state || { department: "" };

    useEffect(() => {
    }, [title]);
    useEffect(() => {
    }, [department]);

    const [id, setId] = useState("");
    const [stname, setName] = useState("");
    const [course, setCourse] = useState("");
    //const [course, setCourse] = useState(location.state ? location.state.courseName : "");

    //const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    async function loadStudents() {
        try {
            //const response = await axios.get("http://localhost:4000/api/Student/GetStudents");
            //setStudents(response.data);
        } catch (error) {
            console.error("Error loading students:", error);
        }
    }

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/Student/AddStudent", {
                stname,
                course,
            });
            alert("Student Registered Successfully");
            clearForm();
            loadStudents();
        } catch (error) {
            console.error("Error saving student:", error);
            alert("Failed to register student. Please try again.");
        }
    }


    function clearForm() {
        setId("");
        setName("");
        setCourse("");
    }

    const navigate = useNavigate();
    const handleViewClick = () => {

        // Example navigation to '/studentcrud' with state
        navigate("/studentcrud");
      };

    return (

        <section className="vh-100" style={{ backgroundColor: '#FDFDFD' }}>
            <NavigationBar2 />
            <div className="container " style={{ margintop: '5px', height: '650px', width: '1050px', borderRadius: '50px', backgroundColor: '#b5e7ee' }}>
                <div className="row d-flex justify-content-center align-items-center h-100" >
                    <div className="d-flex justify-content-center align-items-center"  >
                        <div className="card text-black mt-0" style={{
                            borderRadius: '50px',
                            height: '600px',
                            width: '1000px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 1.0), 0 6px 20px rgba(0, 0, 0, 1.0)',
                            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                            transition: 'transform 2.0 s'
                        }}>
                            <div className="card-body p-md-1" >
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4"  >
                                            <span style={{ fontWeight: 'bold', marginRight: '5px' }}>{department}</span>
                                        </p>
                                        <p className="text-center h5 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            <span style={{ fontWeight: 'bold', marginRight: '5px' }}>{title}</span>
                                        </p>


                                        <form className="mx-1 mx-md-4" onSubmit={save} >
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="id"
                                                    hidden
                                                    value={id}
                                                    onChange={(event) => setId(event.target.value)}
                                                />
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="stname" style={{ fontWeight: 'bold', marginRight: '5px' }}>Your Name</label>
                                                    <input
                                                        id="stname"
                                                        name="stname"
                                                        type="text"
                                                        autoComplete="firstName"
                                                        value={stname}
                                                        onChange={(event) => setName(event.target.value)}
                                                        required
                                                        className="form-control"
                                                        style={{
                                                            boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.1), inset 0 -6px 20px rgba(0, 0, 0, 0.1)',
                                                            border: '3px solid #e3faf4',
                                                            padding: '10px',
                                                            borderRadius: '15px',
                                                            outline: 'none',
                                                            transition: 'box-shadow 0s ease-in-out'
                                                        }}

                                                    />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="course" style={{ fontWeight: 'bold', marginRight: '5px' }}>Phone Number</label>
                                                    <input
                                                        id="course"
                                                        name="course"
                                                        type="text"
                                                        autoComplete="lastName"
                                                        value={course}
                                                        onChange={(event) => setCourse(event.target.value)}
                                                        required
                                                        className="form-control"

                                                        style={{
                                                            boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.1), inset 0 -6px 20px rgba(0, 0, 0, 0.1)',
                                                            border: '3px solid #e3faf4',
                                                            padding: '10px',
                                                            borderRadius: '15px',
                                                            outline: 'none',
                                                            transition: 'box-shadow 0s ease-in-out'
                                                        }}
                                                    />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>

                                            </div>





                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                                <button type="button" className="btn btn-success btn-lg" style={{marginLeft: '40px'}} onClick={handleViewClick }>
                                                    See All
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2" style={{ height: '600px' }}  >
                                        <img src="https://teach.meetrix.io/blog/assets/images/teaser%20images/02-register-student.gif" className="img-fluid" alt="Sample image" style={{ height: '500px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}






































// import React, { useState } from 'react';
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormFeedback,
// } from 'reactstrap';

// const StudentRegisterForm = ({ isOpen, toggle }) => {
//   const [formData, setFormData] = useState({
//     location: '',
//     companyName: '',
//     position: '',
//     workNumber: '',
//     mobileNumber: '',
//     email: '',
//     workAddress: '',
//     currentPassword: '',
//     newPassword: '',
//     isPublic: false,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     }
//     // Add more validation logic as needed
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log('Form submitted', formData);
//       // Handle form submission
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Student Registration</ModalHeader>
//       <ModalBody>
//         <Form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label for="location">Location</Label>
//             <Input
//               type="select"
//               name="location"
//               id="location"
//               value={formData.location}
//               onChange={handleChange}
//             >
//               <option>Select country</option>
//               <option>Belgium</option>
//               <option>Canada</option>
//               <option>Denmark</option>
//               <option>Estonia</option>
//               <option>France</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="companyName">Company Name</Label>
//             <Input
//               type="text"
//               name="companyName"
//               id="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="position">Position</Label>
//             <Input
//               type="text"
//               name="position"
//               id="position"
//               value={formData.position}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="workNumber">Work Number</Label>
//             <Input
//               type="tel"
//               name="workNumber"
//               id="workNumber"
//               value={formData.workNumber}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="mobileNumber">Mobile Number</Label>
//             <Input
//               type="tel"
//               name="mobileNumber"
//               id="mobileNumber"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="email">Email</Label>
//             <Input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               invalid={!!errors.email}
//             />
//             <FormFeedback>{errors.email}</FormFeedback>
//           </FormGroup>
//           <FormGroup>
//             <Label for="workAddress">Work Address</Label>
//             <Input
//               type="textarea"
//               name="workAddress"
//               id="workAddress"
//               value={formData.workAddress}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="currentPassword">Current Password</Label>
//             <Input
//               type="password"
//               name="currentPassword"
//               id="currentPassword"
//               value={formData.currentPassword}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="newPassword">New Password</Label>
//             <Input
//               type="password"
//               name="newPassword"
//               id="newPassword"
//               value={formData.newPassword}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup check>
//             <Label check>
//               <Input
//                 type="checkbox"
//                 name="isPublic"
//                 checked={formData.isPublic}
//                 onChange={handleChange}
//               />{' '}
//               Make this account public
//             </Label>
//           </FormGroup>
//           <ModalFooter>
//             <Button color="primary" type="submit">
//               Submit
//             </Button>{' '}
//             <Button color="secondary" onClick={toggle}>
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Form>
//       </ModalBody>
//     </Modal>
//   );
// };

// export default StudentRegisterForm;
