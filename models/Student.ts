class Student extends Person {
    year: number;
    shift: string;
    room: string;
    subjects: string[] = [];

    constructor(
        id: number,
        name: string,
        age: number,
        cpf: string,
        year: number,
        shift: string,
        room: string
    ) {
        super(id, name, age, cpf);
        this.year = year;
        this.shift = shift;
        this.room = room;
    }
}
