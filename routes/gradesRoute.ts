import { Router } from "express";
import {
    gradesRoot,
    getGrades,
    getGradesBySubject,
    getGradesByStudent,
    getGrade,
    addGrade,
    updateGrade,
    deleteGrade,
} from "../controllers/gradesController";

const gradesRouter = Router();

gradesRouter.get("/", gradesRoot);

gradesRouter.get("/getGrades", getGrades);

gradesRouter.get("/getGradesBySubject", getGradesBySubject);

gradesRouter.get("/getGradesByStudent", getGradesByStudent);

gradesRouter.get("/getGrade", getGrade);

gradesRouter.post("/addGrade", addGrade);

gradesRouter.put("/updateGrade", updateGrade);

gradesRouter.delete("/deleteGrade", deleteGrade);

export default gradesRouter;
