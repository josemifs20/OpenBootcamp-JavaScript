class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
        this.asignaturas = ["JavaScript", "HTML", "CSS"];
    }

    obtenDatos() {
        const obj = {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        };
        return obj;
    }
};

const student = new Estudiante("pepe");
console.log(student.obtenDatos());