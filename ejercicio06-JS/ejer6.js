let listaDeCompras = ["Pan", "Leche", "Carne", "Queso", "Cereales"];

listaDeCompras.push("Aceite de Girasol");

listaDeCompras.pop();

let peliculas = [
    {
        titulo: "Avatar: The Way of Water", 
        director: "James Cameron", 
        fecha: "2022"
    },
    {
        titulo: "Split", 
        director: "M. Night Shyamalan", 
        fecha: "2016"
    }, 
    {
        titulo: "Shutter Island", 
        director: "Martin Scorsese", 
        fecha: "2010"
    }
]


let peliculasPost2010 = peliculas.filter(obj => obj.fecha > 2010)


let directores = peliculas.map(obj => obj.director);


let titulos = peliculas.map(obj => obj.titulo);


let directoresYPeliculas = directores.concat(titulos);


let directYPelicula = [...directores, ...titulos];
