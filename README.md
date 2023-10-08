# School Management API 
### Overview
This project is an API for management of a school. It can be used for controlling the registration of teachers, students, subjects and grades.
### Technologies
It was developed using Typescript, Node.js, Express and SQLite.
### Instructions
- Clone this repository
- Make sure you have Node.js installed
- Install modules with `npm install`
- Add .env file and define a port (example: `PORT=3000`)
- Run your project with `npm run dev`
- Make requests!

### Requests
Here’s all requests included in the project. Make sure to check out the postman collection in the repository.

#### Students

| Route | HTTP Verb | Request Body / Query |
| --- | --- | --- | 
| /students/getStudents | `GET` | Empty |
| /students/getStudentsOrderedByBirthday | `GET` | Empty |
| /students/getStudent | `GET` | id=? |
| /students/addStudent | `POST` | { "cpf": "12218637545", "name": "Joana Teresinha Giovanna Fogaça", "birthday": "2004-04-25", "shift": "manha", "room": "a", "year": "5" } |
| /students/updateStudent | `PUT` | { "id": "1", "cpf": "12218637545", "name": "Joana Teresinha Giovanna Fogaça", "birthday": "2008-04-25", "shift": "manha", "room": "a", "year": "6" } |
| /students/deleteStudent | `DELETE` | id=? |

#### Teachers

| Route | HTTP Verb | Request Body / Query |
| --- | --- | --- | 
| /teachers/getTeachers | `GET` | Empty |
| /teachers/getTeachersOrderedByBirthday | `GET` | Empty |
| /teachers/getTeacher | `GET` | id=? |
| /teachers/addTeacher | `POST` | { "name": "Thomas Mateus Jorge Dias", "cpf": "98107119053", "birthday": "2000-02-06", "salary": "2000" } |
| /teachers/updateTeacher | `PUT` | { "id": "1", "name": "Thomas Mateus Jorge Dias", "cpf": "98107119053", "birthday": "1981-02-06", "salary": "3200" } |
| /teachers/deleteTeacher | `DELETE` | id=? |

#### Subjects

| Route | HTTP Verb | Request Body / Query |
| --- | --- | --- | 
| /subjects/getSubjects | `GET` | Empty |
| /subjects/getSubject | `GET` | id=? |
| /subjects/addSubject | `POST` | { "name": "matemática", "idTeacher": "1" } |
| /subjects/updateSubject | `PUT` | { "name": "portugues", "idTeacher": "1", "id": "1" } |
| /subjects/deleteSubject | `DELETE` | id=? |

#### Grades

| Route | HTTP Verb | Request Body / Query |
| --- | --- | --- | 
| /grades/getGrades | `GET` | Empty |
| /grades/getGrade | `GET` | id=? |
| /grades/getGradesBySubject | `GET` | id=? |
| /grades/getGradesByStudent | `GET` | id=? |
| /grades/addGrade | `POST` | { "idStudent": "1", "idSubject": "1", "grade": "9" } |
| /grades/updateGrade | `PUT` | { "idStudent": "1", "idSubject": "1", "grade": "8", "id": "1" } |
| /grades/deleteGrade | `DELETE` | id=? |

