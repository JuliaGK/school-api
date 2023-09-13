"use strict";
class Teacher extends Person {
    constructor(id, name, cpf, birthday, salary) {
        super(id, name, cpf, birthday);
        this.salary = salary;
    }
}
