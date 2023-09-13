"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.addStudent = exports.getStudent = exports.getStudents = exports.studentsRoot = void 0;
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
        students.push(row);
    }, () => {
        res.send(students);
    });
};
exports.getStudents = getStudents;
const getStudent = (req, res) => {
    const id = req.query.id;
    const sql = `
        SELECT * FROM students WHERE id=${id};
    `;
    dbConfig_1.db.get(sql, [], (error, row) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        if (row) {
            res.send(row);
        }
        else {
            res.send("Não existe estudante para esse id");
        }
    });
};
exports.getStudent = getStudent;
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
const updateStudent = (req, res) => {
    const student = req.body;
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
    dbConfig_1.db.run(sql, (error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.send("student updated");
    });
};
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => {
    const id = req.query.id;
    const sql = ` 
        DELETE FROM students
        WHERE id = ${id};
    `;
    dbConfig_1.db.run(sql, (error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.send("student deleted");
    });
};
exports.deleteStudent = deleteStudent;
