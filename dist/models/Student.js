"use strict";
class Student extends Person {
    constructor(id, name, age, cpf, year, shift, room) {
        super(id, name, age, cpf);
        this.subjects = [];
        this.year = year;
        this.shift = shift;
        this.room = room;
    }
}
