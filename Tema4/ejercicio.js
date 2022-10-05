
const nombre = "Jose Miguel";
const apellido = "Perez"

let estudiante = nombre.concat(" ", apellido);
//const estudiante = nombre.concat(" ").concat(apellido)

let estudianteMayus = estudiante.toUpperCase();
let estudiantesMinus = estudiante.toLowerCase();
let estudianteLength = estudiante.length;

let startNombre = nombre.charAt(0);
let lastApellido = apellido.charAt(apellido.length-1);
// Todas válidas
// const inicialNombre = nombre[0]
// const inicialNombre = nombre.at(0)
// const inicialNombre = nombre.substring(0, 1)
// Todas válidas
// const finalApellido = apellido[apellido.length - 1]
// const finalApellido = nombre.at(apellido.length - 1)
// const finalApellido = apellido.substring(apellido.length - 1, apellido.length)

let noSpace = estudiante.replace(/\s/g, "");
let includesName = estudiante.includes(nombre);