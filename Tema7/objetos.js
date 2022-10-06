const objPersonal = {
    nombre: "jose",
    apellido: "martin",
    edad: 31,
    altura: 191,
    eresDesarrollador: true
};

const edadPersonal = objPersonal.edad;


const lista = [
    {
        ...objPersonal
    },{
        nombre: "Pedro",
        apellido: "Angulo",
        edad: 35,
        altura: 180,
        eresDesarrollador: true
    },{
        nombre: "Amaia",
        apellido: "Etxeberria",
        edad: 30,
        altura: 165,
        eresDesarrollador: false
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)
