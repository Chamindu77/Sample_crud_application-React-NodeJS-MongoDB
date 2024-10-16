const Student = require("../Model/studentSchema");
//const path = require("path");
//const fs = require("fs");

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.addStudent = async (req, res) => {
  const { stname, course } = req.body;
  //const profilePicturePath = req.file ? req.file.path : "";
  try {
    const newStudent = new Student({
      stname,
      course,
      
    });

    await newStudent.save();
    res.json(newStudent);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.updateStudent = async (req, res) => {
    const { stname, course } = req.body;
    const { id } = req.params; // Make sure to get the ID from req.params
  
    try {
      let student = await Student.findById(id);
      if (!student) return res.status(404).json({ msg: "Student not found" });
  
      student.stname = stname;
      student.course = course;
  
      await student.save();
      res.json(student);
    } catch (err) {
      res.status(500).send("Server error");
    }
  };

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ msg: "Student not found" });

    // if (student.profilePicturePath) {
    //   fs.unlinkSync(path.resolve(student.profilePicturePath));
    // }

    await student.remove();
    res.json({ msg: "Student removed" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
