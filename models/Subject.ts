import Teacher from "./Teacher";

class Subject {
    id: number;
    name: string;
    teacher: Teacher;

    constructor(id: number, name: string, teacher: Teacher) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
    }
}

export default Subject;
