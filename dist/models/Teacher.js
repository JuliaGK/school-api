"use strict";
class Teacher extends Person {
    constructor(id, name, age, cpf, salary) {
        super(id, name, age, cpf);
        this.salary = salary;
    }
}
