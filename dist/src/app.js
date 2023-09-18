"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const studentsRoute_1 = __importDefault(require("../routes/studentsRoute"));
const teachersRoute_1 = __importDefault(require("../routes/teachersRoute"));
const subjectsRoute_1 = __importDefault(require("../routes/subjectsRoute"));
const gradesRoute_1 = __importDefault(require("../routes/gradesRoute"));
const dbConfig_1 = require("../db/dbConfig");
dotenv_1.default.config();
(0, dbConfig_1.createDbConnection)();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("app root");
});
app.use("/students", studentsRoute_1.default);
app.use("/teachers", teachersRoute_1.default);
app.use("/subjects", subjectsRoute_1.default);
app.use("/grades", gradesRoute_1.default);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
