"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudent = exports.getStudents = exports.studentsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
const studentsRoot = (req, res) => {
    res.send("students root");
};
exports.studentsRoot = studentsRoot;
const getStudents = (req, res) => {
    const students = [];
    const sql = `SELECT * FROM students`;
    dbConfig_1.db.each(sql, [], (error, row) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        console.log(row);
        students.push(row);
    }, () => {
        res.send(students);
    });
};
exports.getStudents = getStudents;
// TODO: get specific student by id
const addStudent = (req, res) => {
    const student = req.body;
    const sql = `
        INSERT INTO students (name, cpf, birthday, year, shift, room)
        VALUES ("${student.name.toUpperCase()}", "${student.cpf}", 
        "${student.birthday}", "${student.year}",
        "${student.shift.toUpperCase()}", "${student.room.toUpperCase()}")
    `;
    dbConfig_1.db.run(sql, (error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(201);
        res.send("student added");
    });
};
exports.addStudent = addStudent;
