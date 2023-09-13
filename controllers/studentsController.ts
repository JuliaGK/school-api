import { Response, Request } from "express";

const studentsRoot = (req: Request, res: Response) => {
    res.send("students root");
};

// TODO: add student
// TODO: get student
// TODO: update student
// TODO: delete student
// TODO: get student grades

export { studentsRoot };
