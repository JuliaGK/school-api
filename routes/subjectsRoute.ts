import { Router } from "express";
import {
    getSubjects,
    getSubject,
    subjectsRoot,
    addSubject,
    updateSubject,
    deleteSubject,
} from "../controllers/subjectsController";

const subjectsRouter = Router();

subjectsRouter.get("/", subjectsRoot);

subjectsRouter.get("/getSubjects", getSubjects);

subjectsRouter.get("/getSubject", getSubject);

subjectsRouter.post("/addSubject", addSubject);

subjectsRouter.put("/updateSubject", updateSubject);

subjectsRouter.delete("/deleteSubject", deleteSubject);

export default subjectsRouter;
