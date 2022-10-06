const listCompra = ["harina", "pan", "patata", "ajo", "tomate"];
listCompra.push("Aceite de girasol");
listCompra.pop();
const favFilms = [
    {
        titulo: "Gladiator",
        director: "pepe",
        fecha: new Date(1992,04,20)
    },
    {
        titulo: "ESDLA",
        director: "Opticks",
        fecha: new Date(1998,06,21)
    },
    {
        titulo: "Avatar",
        director: "ulio",
        fecha: new Date(2021,08,26)
    },
];

const films2000 = favFilms.filter(value => value.fecha < new Date(2010, 0, 1));

const director = favFilms.map(values => values.director);
const titulos = favFilms.map(values => values.titulo);

const directorTitulos = director.concat(titulos);

const spread = [...director, ...titulos];
