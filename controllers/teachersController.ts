import { Response, Request } from "express";

const teachersRoot = (req: Request, res: Response) => {
    res.send("teachers root");
};

// TODO: add teacher
// TODO: get teacher
// TODO: update teacher
// TODO: delete teacher
// TODO: get all subjects that the teacher is in
export { teachersRoot };
