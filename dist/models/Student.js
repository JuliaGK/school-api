"use strict";
class Student extends Person {
    constructor(id, name, cpf, birthday, year, shift, room) {
        super(id, name, cpf, birthday);
        this.subjects = [];
        this.year = year;
        this.shift = shift;
        this.room = room;
    }
}
