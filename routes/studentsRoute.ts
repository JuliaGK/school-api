import { Router } from "express";
import {
    studentsRoot,
    addStudent,
    getStudents,
} from "../controllers/studentsController";

const studentsRouter = Router();

studentsRouter.get("/", studentsRoot);

studentsRouter.get("/getStudents", getStudents);

studentsRouter.post("/addStudent", addStudent);

export default studentsRouter;
