const express = require("express");
const router = express.Router();

const {
    CreateStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require("../controller/studentController");
const { model } = require("mongoose");

router.post("/",CreateStudent);
router.get("/",getStudents);
router.get("/:id",getStudentById);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent)

module.exports = router;
console.log("Route");