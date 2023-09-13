"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsController_1 = require("../controllers/studentsController");
const studentsRouter = (0, express_1.Router)();
studentsRouter.get("/", studentsController_1.studentsRoot);
studentsRouter.get("/getStudents", studentsController_1.getStudents);
studentsRouter.post("/addStudent", studentsController_1.addStudent);
exports.default = studentsRouter;
