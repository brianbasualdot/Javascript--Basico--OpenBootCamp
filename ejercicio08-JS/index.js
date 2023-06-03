function True (){

    return true;
}
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function timeAsync (){
    return  console.log('Hola soy una promesa');
    }
    setTimeout(timeAsync, 5000);


// - Una función generadora de índices pares automáticos

function* parId(){

    let id = 0;
    while(true){

        id++;
        id++;
        yield id;
    }
}

const genId = parId();

console.log(genId.next().value);
console.log(genId.next().value);
console.log(genId.next().value);