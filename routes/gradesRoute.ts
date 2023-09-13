import { Router } from "express";
import { gradesRoot } from "../controllers/gradesController";

const gradesRouter = Router();

gradesRouter.get("/", gradesRoot);

export default gradesRouter;
