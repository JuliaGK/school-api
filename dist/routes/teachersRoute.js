"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teachersController_1 = require("../controllers/teachersController");
const teachersRouter = (0, express_1.Router)();
teachersRouter.get("/", teachersController_1.teachersRoot);
teachersRouter.get("/getTeachers", teachersController_1.getTeachers);
teachersRouter.get("/getTeachersOrderedByBirthday", teachersController_1.getTeachersOrderedByBirthday);
teachersRouter.get("/getTeacher", teachersController_1.getTeacher);
teachersRouter.get("/getSalaryAverage", teachersController_1.getSalaryAverage);
teachersRouter.post("/addTeacher", teachersController_1.addTeacher);
teachersRouter.put("/updateTeacher", teachersController_1.updateTeacher);
teachersRouter.delete("/deleteTeacher", teachersController_1.deleteTeacher);
exports.default = teachersRouter;
