"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Teacher extends Person_1.default {
    constructor(id, name, cpf, birthday, salary) {
        super(id, name, cpf, birthday);
        this.salary = salary;
    }
}
exports.default = Teacher;
