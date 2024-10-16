import React, { useEffect, useState } from "react";
import axios from "axios";
//import NavigationBar from "./Navbar"; // Import the Navbar component
import NavigationBar2 from "./Header/Navbarhome";
import { useLocation } from 'react-router-dom';


function StudentCrud() {
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

  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    try {
      const response = await axios.get("http://localhost:4000/api/Student/GetStudents");
      setStudents(response.data);
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

  async function editStudent(student) {
    setId(student._id); // Use _id for MongoDB document ID
    setName(student.stname);
    setCourse(student.course);
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/Student/UpdateStudent/${id}`, {
        stname,
        course,
      });
      alert("Student Updated Successfully");
      clearForm();
      loadStudents();
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student. Please try again.");
    }
  }

  async function deleteStudent(id) {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:4000/api/Student/DeleteStudent/${id}`);
        alert("Student Deleted Successfully");
        clearForm();
        loadStudents();
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("Failed to delete student. Please try again.");
      }
    }
  }

  function clearForm() {
    setId("");
    setName("");
    setCourse("");
  }

  return (
    <div>
      <NavigationBar2 /> {/* Add the Navbar component here */}
      <div className="container " style={{ height: '600px', borderRadius: '50px', backgroundColor: '#bceedb' }}>

      <div className="container mt-4  d-flex justify-content-center">
        <div className="card d-flex justify-content-center shadow-lg" style={{borderRadius: '20px', marginTop: '100px', width: '500px', marginRight: '50px', marginLeft: '-200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' }}>
          <h5 className="card-header bg-success text-white" style={{ borderRadius: '20px 20px 0 0', height: '50px' }}>Student Details</h5>
          <div className="card-body">
            <form onSubmit={save}>
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
              <div className="form-group">
                <label htmlFor="stname" style={{ fontWeight: 'bold', marginRight: '5px' }}>Student Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="stname"
                  value={stname}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div>
                {/* <span style={{ fontWeight: 'bold', marginRight: '5px' }}>{department}</span> */}
              </div>
              <div>
                {/* <span style={{ fontWeight: 'bold', marginRight: '5px' }}>{title}</span> */}
              </div>
              <div className="form-group">
                <label htmlFor="course" style={{ fontWeight: 'bold', marginRight: '5px' }}>Phone Number</label>
                {/* <label htmlFor="course">
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>{ title}</span>
        </label> */}
                <input
                  type="text"
                  className="form-control"
                  id="course"
                  value={course}
                  onChange={(event) => setCourse(event.target.value)}
                  required
                />
              </div>
              <div className="text-right" style={{ marginTop: '10px', marginLeft: '100px' }}>
                <button type="submit" className="btn btn-primary m-3" >
                  Register
                </button>
                <button type="button" className="btn btn-success" onClick={update}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-4" style={{ width: '500px', marginLeft: '-5px' }}>
          <table className="table table-striped table-bordered" style={{  width: '700px', marginRight: '20px', marginTop: '40px' }}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Student Id</th>
                <th scope="col">Student Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>{student._id}</td>
                  <td>{student.stname}</td>
                  <td>{student.course}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-secondary m-1"
                      onClick={() => editStudent(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteStudent(student._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}

export default StudentCrud;
