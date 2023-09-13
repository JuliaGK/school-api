"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(id, name, cpf, birthday) {
        //TODO: Adicionar checagem de data valida
        //TODO: adicionar checagem de cpf valido
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.birthday = birthday;
    }
}
exports.default = Person;
