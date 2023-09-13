class Teacher extends Person {
    salary: number;

    constructor(
        id: number,
        name: string,
        cpf: string,
        birthday: string,
        salary: number
    ) {
        super(id, name, cpf, birthday);
        this.salary = salary;
    }
}
