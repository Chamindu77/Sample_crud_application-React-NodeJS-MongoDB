const express = require("express");
const router = express.Router();
const { getStudents, addStudent, updateStudent, deleteStudent } = require('../Controllers/studentController');

//onst studentController = require("../Controllers/studentController");

// http://localhost:3000/api/Student/GetStudents

router.get("/GetStudents", getStudents);
router.post("/AddStudent", addStudent);
router.put("/UpdateStudent/:id", updateStudent);
router.delete("/DeleteStudent/:id", deleteStudent);

module.exports = router;
