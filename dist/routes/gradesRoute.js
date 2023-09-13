"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gradesController_1 = require("../controllers/gradesController");
const gradesRouter = (0, express_1.Router)();
gradesRouter.get("/", gradesController_1.gradesRoot);
exports.default = gradesRouter;
