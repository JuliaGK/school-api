"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teachersController_1 = require("../controllers/teachersController");
const teachersRouter = (0, express_1.Router)();
teachersRouter.get("/", teachersController_1.teachersRoot);
exports.default = teachersRouter;
