"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(id, name, cpf, birthday, year, shift, room) {
        super(id, name, cpf, birthday);
        this.year = year;
        this.shift = shift;
        this.room = room;
    }
}
exports.default = Student;
