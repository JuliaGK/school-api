import { Response, Request } from "express";
import { db } from "../db/dbConfig";
import Subject from "../models/Subject";

const subjectsRoot = (req: Request, res: Response) => {
    res.send("subjects root");
};

const addSubject = (req: Request, res: Response) => {
    const subject: Subject = req.body;
    const sql = `
        INSERT INTO subjects (name, idTeacher)
        VALUES ("${subject.name.toUpperCase()}", "${subject.idTeacher}");
    `;

    db.run(sql, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(201);
        res.send("subject added");
    });
};

const getSubjects = (req: Request, res: Response) => {
    const subjects: Subject[] = [];
    const sql = `SELECT * FROM subjects;`;

    db.each(
        sql,
        [],
        (error: Error, row: Subject) => {
            if (error) {
                res.status(400);
                res.end(error);
            }
            subjects.push(row);
        },
        () => {
            res.send(subjects);
        }
    );
};

const getSubject = (req: Request, res: Response) => {
    const id = req.query.id;
    const sql = `
        SELECT * FROM subjects WHERE id=${id};
    `;

    db.get(sql, [], (error: Error, row: Subject) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        if (row) {
            res.send(row);
        } else {
            res.send("Não existe matéria para esse id");
        }
    });
};

const updateSubject = (req: Request, res: Response) => {
    const subject: Subject = req.body;
    const sql = `
        UPDATE subjects
        SET name = "${subject.name.toUpperCase()}",
        idTeacher = "${subject.idTeacher}"
        WHERE id = "${subject.id}";
    `;

    db.run(sql, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        res.send("subject updated");
    });
};

const deleteSubject = (req: Request, res: Response) => {
    const id = req.query.id;
    const sql = ` 
        DELETE FROM subjects
        WHERE id = ${id};
    `;

    db.run(sql, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        // TODO: dar mensagem para quando não foi deletado por falta de subject
        // com id correspondente
        res.send("subjects deleted");
    });
};

export {
    subjectsRoot,
    getSubjects,
    getSubject,
    addSubject,
    updateSubject,
    deleteSubject,
};
