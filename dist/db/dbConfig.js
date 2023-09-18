"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.createDbConnection = void 0;
const sqlite3 = require("sqlite3").verbose();
const filePath = "./db/school.db";
let db = null;
exports.db = db;
const createDbConnection = () => {
    exports.db = db = new sqlite3.Database(filePath, (error) => {
        if (error) {
            return console.error(error.message);
        }
    });
    console.log("Connection with SQLite has been estabilished");
    createTables();
    return db;
};
exports.createDbConnection = createDbConnection;
const createTables = () => {
    createTableStudents();
    createTableTeachers();
    createTableSubjects();
    createTableStudentsSubjects();
    createTableGrades();
};
const createTableStudents = () => {
    db.exec(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        cpf VARCHAR(50),
        birthday TEXT,
        year INTEGER,
        shift VARCHAR(50),
        room STRING
        );
    `);
};
const createTableTeachers = () => {
    db.exec(`CREATE TABLE IF NOT EXISTS teachers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        cpf VARCHAR(50),
        birthday TEXT,
        salary REAL
        );
    `);
};
const createTableSubjects = () => {
    db.exec(`CREATE TABLE IF NOT EXISTS subjects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        idTeacher INTEGER,
        FOREIGN KEY (idTeacher) REFERENCES teachers(id)
        );
    `);
};
const createTableStudentsSubjects = () => {
    db.exec(`CREATE TABLE IF NOT EXISTS students_subjects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idStudent INTEGER,
        idSubject INTEGER,
        FOREIGN KEY (idStudent) REFERENCES students(id),
        FOREIGN KEY (idSubject) REFERENCES subjects(id)
        );
    `);
};
const createTableGrades = () => {
    db.exec(`CREATE TABLE IF NOT EXISTS grades (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idStudent INTEGER,
        idSubject INTEGER,
        grade REAL,
        FOREIGN KEY (idStudent) REFERENCES students(id),
        FOREIGN KEY (idSubject) REFERENCES subjects(id)
        );
    `);
};
