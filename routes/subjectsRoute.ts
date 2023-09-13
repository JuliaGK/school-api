import { Router } from "express";
import { subjectsRoot } from "../controllers/subjectsController";

const subjectsRouter = Router();

subjectsRouter.get("/", subjectsRoot);

export default subjectsRouter;
