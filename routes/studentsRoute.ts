import { Router } from "express";
import {
    studentsRoot,
    addStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent,
} from "../controllers/studentsController";

const studentsRouter = Router();

studentsRouter.get("/", studentsRoot);

studentsRouter.get("/getStudents", getStudents);

studentsRouter.get("/getStudent", getStudent);

studentsRouter.post("/addStudent", addStudent);

studentsRouter.put("/updateStudent", updateStudent);

studentsRouter.delete("/deleteStudent", deleteStudent);

export default studentsRouter;
