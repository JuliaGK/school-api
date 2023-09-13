import express from "express";
import dotenv from "dotenv";
import studentsRouter from "../routes/studentsRoute";
import teachersRouter from "../routes/teachersRoute";
import subjectsRouter from "../routes/subjectsRoute";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("app root");
});

app.use("/students", studentsRouter);

app.use("/teachers", teachersRouter);

app.use("/subjects", subjectsRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
