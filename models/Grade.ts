class Grade {
    id: number;
    idStudent: number;
    idSubject: number;
    grade: number;

    constructor(
        id: number,
        idStudent: number,
        idSubject: number,
        grade: number
    ) {
        this.id = id;
        this.idStudent = idStudent;
        this.idSubject = idSubject;
        this.grade = grade;
    }
}

export default Grade;
