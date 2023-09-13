class Teacher extends Person {
    salary: number;

    constructor(
        id: number,
        name: string,
        age: number,
        cpf: string,
        salary: number
    ) {
        super(id, name, age, cpf);
        this.salary = salary;
    }
}
