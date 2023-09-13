import { Router } from "express";
import { studentsRoot } from "../controllers/studentsController";

const studentsRouter = Router();

studentsRouter.get("/", studentsRoot);

export default studentsRouter;
