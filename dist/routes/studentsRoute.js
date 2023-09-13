"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsController_1 = require("../controllers/studentsController");
const studentsRouter = (0, express_1.Router)();
studentsRouter.get("/", studentsController_1.studentsRoot);
exports.default = studentsRouter;
