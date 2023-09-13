import { Response, Request } from "express";

const gradesRoot = (req: Request, res: Response) => {
    res.send("grades root");
};

// TODO: add grade
// TODO: get grades
// TODO: update grade
// TODO: delete grade

export { gradesRoot };
