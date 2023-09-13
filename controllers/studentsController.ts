import { Response, Request } from "express";
import { db } from "../db/dbConfig";
import Student from "../models/Student";

const studentsRoot = (req: Request, res: Response) => {
    res.send("students root");
};

const getStudents = (req: Request, res: Response) => {
    const students: Student[] = [];
    const sql = `SELECT * FROM students`;

    db.each(
        sql,
        [],
        (error: Error, row: Student) => {
            if (error) {
                res.status(400);
                res.end(error);
            }
            students.push(row);
        },
        () => {
            res.send(students);
        }
    );
};

const getStudent = (req: Request, res: Response) => {
    const id = req.query.id;
    const sql = `
        SELECT * FROM students WHERE id=${id};
    `;

    db.get(sql, [], (error: Error, row: Student) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        if (row) {
            res.send(row);
        } else {
            res.send("Não existe estudante para esse id");
        }
    });
};

const addStudent = (req: Request, res: Response) => {
    const student: Student = req.body;
    const sql = `
        INSERT INTO students (name, cpf, birthday, year, shift, room)
        VALUES ("${student.name.toUpperCase()}", "${student.cpf}", 
        "${student.birthday}", "${student.year}",
        "${student.shift.toUpperCase()}", "${student.room.toUpperCase()}")
    `;

    db.run(sql, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(201);
        res.send("student added");
    });
};

const updateStudent = (req: Request, res: Response) => {
    const student: Student = req.body;
    const sql = `
        UPDATE students
        SET name = "${student.name.toUpperCase()}",
        cpf = "${student.cpf}",
        birthday = "${student.birthday}",
        year = "${student.year}",
        shift = "${student.shift.toUpperCase()}",
        room = "${student.room.toUpperCase()}"
        WHERE id = ${student.id};
    `;

    db.run(sql, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.send("student updated");
    });
};

const deleteStudent = (req: Request, res: Response) => {
    const id = req.query.id;
    const sql = ` 
        DELETE FROM students
        WHERE id = ${id};
    `;

    db.run(sql, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.send("student deleted");
    });
};

export {
    studentsRoot,
    getStudents,
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent,
};
