"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subjectsController_1 = require("../controllers/subjectsController");
const subjectsRouter = (0, express_1.Router)();
subjectsRouter.get("/", subjectsController_1.subjectsRoot);
exports.default = subjectsRouter;
