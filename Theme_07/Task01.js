'use strict';
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudent = ['Сидоров', 'Смирнов', 'Попов'];

function filter(allStudents, failedStudent) {
    return (allStudents.filter(n => !failedStudent.includes(n)));
}
console.log(filter(allStudents, failedStudent));