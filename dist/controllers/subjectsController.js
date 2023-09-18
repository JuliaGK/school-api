"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubject = exports.updateSubject = exports.addSubject = exports.getSubject = exports.getSubjects = exports.subjectsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
const subjectsRoot = (req, res) => {
    res.send("subjects root");
};
exports.subjectsRoot = subjectsRoot;
const getSubjects = (req, res) => {
    const subjects = [];
    const sql = `SELECT * FROM subjects;`;
    dbConfig_1.db.each(sql, [], (error, row) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        subjects.push(row);
    }, () => {
        res.send(subjects);
    });
};
exports.getSubjects = getSubjects;
const getSubject = (req, res) => {
    const id = req.query.id;
    const sql = `
        SELECT * FROM subjects WHERE id=${id};
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
            res.send("Não existe matéria para esse id");
        }
    });
};
exports.getSubject = getSubject;
const addSubject = (req, res) => {
    const subject = req.body;
    const sql = `
        INSERT INTO subjects (name, idTeacher)
        VALUES ("${subject.name.toUpperCase()}", "${subject.idTeacher}");
    `;
    dbConfig_1.db.run(sql, (error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(201);
        res.send("subject added");
    });
};
exports.addSubject = addSubject;
const updateSubject = (req, res) => {
    const subject = req.body;
    const sql = `
        UPDATE subjects
        SET name = "${subject.name.toUpperCase()}",
        idTeacher = "${subject.idTeacher}"
        WHERE id = "${subject.id}";
    `;
    dbConfig_1.db.run(sql, (error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        res.send("subject updated");
    });
};
exports.updateSubject = updateSubject;
const deleteSubject = (req, res) => {
    const id = req.query.id;
    const sql = ` 
        DELETE FROM subjects
        WHERE id = ${id};
    `;
    dbConfig_1.db.run(sql, (error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(200);
        res.send("subjects deleted");
    });
};
exports.deleteSubject = deleteSubject;
