class Person {
    id: number;
    name: string;
    cpf: string;
    birthday: string;

    constructor(id: number, name: string, cpf: string, birthday: string) {
        //TODO: Adicionar checagem de data valida
        //TODO: adicionar checagem de cpf valido
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.birthday = birthday;
    }
}
