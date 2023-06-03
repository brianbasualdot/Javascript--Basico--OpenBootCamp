class Estudiante {
    constructor(nombre, asignaturas){
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    obtenDatos() {
        return {
            'nombre': this.nombre,
            'asignaturas': this.asignaturas
        }
    }
}

const estudiante = new Estudiante('Brian', ['JavaScript', 'HTML', 'CSS'])
const data = estudiante.obtenDatos()