import { Response, Request } from "express";
import Teacher from "../models/Teacher";
import { db } from "../db/dbConfig";

const teachersRoot = (req: Request, res: Response) => {
    res.send("teachers root");
};

const getTeachers = (req: Request, res: Response) => {
    const teachers: Teacher[] = [];
    const sql = `SELECT * FROM teachers;`;

    db.each(
        sql,
        [],
        (error: Error, row: Teacher) => {
            if (error) {
                res.status(400);
                res.end(error);
            }
            teachers.push(row);
        },
        () => {
            res.send(teachers);
        }
    );
};

const getTeachersOrderedByBirthday = (req: Request, res: Response) => {
    const teachers: Teacher[] = [];
    const sql = `SELECT * FROM teachers ORDER BY birthday;`;

    db.each(
        sql,
        [],
        (error: Error, row: Teacher) => {
            if (error) {
                res.status(400);
                res.end(error);
            }
            teachers.push(row);
        },
        () => {
            res.send(teachers);
        }
    );
};

const getTeacher = (req: Request, res: Response) => {
    const id = req.query.id;
    const sql = `
        SELECT * FROM teachers WHERE id=${id};
    `;

    db.get(sql, [], (error: Error, row: Teacher) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        if (row) {
            res.send(row);
        } else {
            res.send("Não existe professor para esse id");
        }
    });
};

const getSalaryAverage = (req: Request, res: Response) => {
    const sql = `
        SELECT salary FROM teachers ;
    `;

    db.all(sql, [], (error: Error, rows: any) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);

        const avgSalary =
            rows.reduce((sum: number, row: any) => {
                return sum + row.salary;
            }, 0) / rows.length;

        if (avgSalary) {
            res.send(avgSalary.toString());
        } else {
            res.send("Sem professores cadastrados");
        }
    });
};

const addTeacher = (req: Request, res: Response) => {
    const teacher: Teacher = req.body;
    const sql = `
        INSERT INTO teachers (name, cpf, birthday, salary)
        VALUES ("${teacher.name.toUpperCase()}", "${teacher.cpf}", 
        "${teacher.birthday}", "${teacher.salary}");
    `;

    db.run(sql, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(201);
        res.send("teachers added");
    });
};

const updateTeacher = (req: Request, res: Response) => {
    const teacher: Teacher = req.body;
    const sql = `
        UPDATE teachers
        SET name = "${teacher.name.toUpperCase()}",
        cpf = "${teacher.cpf}",
        birthday = "${teacher.birthday}",
        salary = "${teacher.salary}"
        WHERE id = ${teacher.id};
    `;

    db.run(sql, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        res.send("teacher updated");
    });
};

const deleteTeacher = (req: Request, res: Response) => {
    const id = req.query.id;
    const sql = ` 
        DELETE FROM teachers
        WHERE id = ${id};
    `;

    db.run(sql, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        // TODO: dar mensagem para quando não foi deletado por falta de professor
        // com id correspondente
        res.send("teacher deleted");
    });
};

// TODO: get all subjects that the teacher is in
// TODO: use patch route
export {
    teachersRoot,
    getTeachers,
    getTeachersOrderedByBirthday,
    getTeacher,
    getSalaryAverage,
    addTeacher,
    updateTeacher,
    deleteTeacher,
};
