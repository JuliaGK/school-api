class Subject {
    id: number;
    name: string;
    teacher: Teacher;
    active: boolean = true;

    constructor(id: number, name: string, teacher: Teacher) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
    }
}