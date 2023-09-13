import { Response, Request } from "express";

const subjectsRoot = (req: Request, res: Response) => {
    res.send("subjects root");
};

// TODO: add subj
// TODO: get subj
// TODO: update subj
// TODO: delete subj
// TODO: add grade
// TODO: get allGrades
// TODO: get mean
// TODO: change active to unactive

export { subjectsRoot };
