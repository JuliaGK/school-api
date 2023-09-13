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
            console.log(row);
            students.push(row);
        },
        () => {
            res.send(students);
        }
    );
};

// TODO: get specific student by id

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

// TODO: update student
// TODO: delete student
// TODO: get student grades

export { studentsRoot, getStudents, addStudent };
