import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import fs from "fs";

import studentsRouter from "../routes/studentsRoute";
import teachersRouter from "../routes/teachersRoute";
import subjectsRouter from "../routes/subjectsRoute";
import gradesRouter from "../routes/gradesRoute";

import { createDbConnection } from "../db/dbConfig";

dotenv.config();

createDbConnection();

const app = express();
const port = process.env.PORT;

var accessLogStream = fs.createWriteStream("./access.log", {
    flags: "a",
});

app.use(morgan("combined", { stream: accessLogStream }));
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("app root");
});

app.use("/students", studentsRouter);

app.use("/teachers", teachersRouter);

app.use("/subjects", subjectsRouter);

app.use("/grades", gradesRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
