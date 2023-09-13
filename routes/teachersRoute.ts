import { Router } from "express";
import { teachersRoot } from "../controllers/teachersController";

const teachersRouter = Router();

teachersRouter.get("/", teachersRoot);

export default teachersRouter;
