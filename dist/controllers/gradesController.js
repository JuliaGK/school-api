"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGrade = exports.updateGrade = exports.addGrade = exports.getGrade = exports.getGradesByStudent = exports.getGradesBySubject = exports.getGrades = exports.gradesRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
const gradesRoot = (req, res) => {
    res.send("grades root");
};
exports.gradesRoot = gradesRoot;
const getGrades = (req, res) => {
    const grades = [];
    const sql = `SELECT * FROM grades;`;
    dbConfig_1.db.each(sql, [], (error, row) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        grades.push(row);
    }, () => {
        res.send(grades);
    });
};
exports.getGrades = getGrades;
const getGradesBySubject = (req, res) => {
    const grades = [];
    const idSubject = req.query.id;
    const sql = `SELECT * FROM grades WHERE idSubject = ${idSubject};`;
    dbConfig_1.db.each(sql, [], (error, row) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        grades.push(row);
    }, () => {
        res.send(grades);
    });
};
exports.getGradesBySubject = getGradesBySubject;
const getGradesByStudent = (req, res) => {
    const grades = [];
    const idStudent = req.query.id;
    const sql = `SELECT * FROM grades WHERE idStudent = ${idStudent};`;
    dbConfig_1.db.each(sql, [], (error, row) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        grades.push(row);
    }, () => {
        res.send(grades);
    });
};
exports.getGradesByStudent = getGradesByStudent;
const getGrade = (req, res) => {
    const id = req.query.id;
    const sql = `
        SELECT * FROM grades WHERE id=${id};
    `;
    dbConfig_1.db.get(sql, [], (error, row) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        if (row) {
            res.send(row);
        }
        else {
            res.send("Não existe nota com esse id");
        }
    });
};
exports.getGrade = getGrade;
const addGrade = (req, res) => {
    const grade = req.body;
    const sql = `
        INSERT INTO grades (idStudent, idSubject, grade)
        VALUES ("${grade.idStudent}", "${grade.idSubject}", "${grade.grade}");
    `;
    dbConfig_1.db.run(sql, (error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(201);
        res.send("grade added");
    });
};
exports.addGrade = addGrade;
const updateGrade = (req, res) => {
    const grade = req.body;
    const sql = `
        UPDATE grades
        SET idStudent = "${grade.idStudent}",
        idSubject = "${grade.idSubject}",
        grade = "${grade.grade}"
        WHERE id = "${grade.id}";
    `;
    dbConfig_1.db.run(sql, (error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        res.send("grade updated");
    });
};
exports.updateGrade = updateGrade;
const deleteGrade = (req, res) => {
    const id = req.query.id;
    const sql = ` 
        DELETE FROM grades
        WHERE id = ${id};
    `;
    dbConfig_1.db.run(sql, (error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        // TODO: dar mensagem para quando não foi deletado por falta de subject
        // com id correspondente
        res.send("grade deleted");
    });
};
exports.deleteGrade = deleteGrade;
