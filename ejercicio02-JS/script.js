const listInfo = {
    nombre: "Brian Basualdo Torres",
    edad: 28,
    isDev: true,
    "fecha-nacimiento": new Date(1995, 02, 02),
    "libro-favoritos": {
        titulo: "Clean Code" ,
        autor: "Robert C. Martin",
        fecha: new Date("December 2009"),
        url: new URL("https://www.amazon.com/-/es/Robert-C-Martin/dp/0132350882")
    }
};

console.log(listInfo);