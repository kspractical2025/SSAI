const Student =require("../models/Students");
exports.createStudent = async (req,res)=>{
    const Student = await Student.create(req.body);
    res.status(201).json(Student);
};
exports.getStudents = async (req,res)=> {
    const Students = await Student.find() 
    res.json(Students);
}; 
exports.updateStudent = async (req,res)=>{
    const Studnet = await Student.findByIdAndUpdate(
    req.param.id,
    req.body,
    {new:body}
    )
    res.json(Student);
}
exports.deleteStudent = async(req,res)=>{
    const Student = await Student.findByIdAndDelete(
        req.param.id
    );
    res.json(Student);
}