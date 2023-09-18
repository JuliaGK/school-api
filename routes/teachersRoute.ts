import { Router } from "express";
import {
    teachersRoot,
    getTeachers,
    getTeachersOrderedByBirthday,
    getTeacher,
    getSalaryAverage,
    addTeacher,
    updateTeacher,
    deleteTeacher,
} from "../controllers/teachersController";

const teachersRouter = Router();

teachersRouter.get("/", teachersRoot);

teachersRouter.get("/getTeachers", getTeachers);

teachersRouter.get(
    "/getTeachersOrderedByBirthday",
    getTeachersOrderedByBirthday
);

teachersRouter.get("/getTeacher", getTeacher);

teachersRouter.get("/getSalaryAverage", getSalaryAverage);

teachersRouter.post("/addTeacher", addTeacher);

teachersRouter.put("/updateTeacher", updateTeacher);

teachersRouter.delete("/deleteTeacher", deleteTeacher);

export default teachersRouter;
