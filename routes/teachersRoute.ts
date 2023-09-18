import { Router } from "express";
import {
    teachersRoot,
    getTeachers,
    getTeacher,
    addTeacher,
    updateTeacher,
    deleteTeacher,
} from "../controllers/teachersController";

const teachersRouter = Router();

teachersRouter.get("/", teachersRoot);

teachersRouter.get("/getTeachers", getTeachers);

teachersRouter.get("/getTeacher", getTeacher);

teachersRouter.post("/addTeacher", addTeacher);

teachersRouter.put("/updateTeacher", updateTeacher);

teachersRouter.delete("/deleteTeacher", deleteTeacher);

export default teachersRouter;
