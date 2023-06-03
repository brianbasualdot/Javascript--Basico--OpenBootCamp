// Crea un nuevo proyecto de Node
// - Instala la dependencia Winston
const logger = require('./logger');
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
function saludo(name){
    if (typeof name === 'string'){
        return console.log(`Hola ${name}`);
    }
        throw new Error('El valor debe ser de tipo string')
        
    }
// - Registra el error en un archivo a través de un try...catch

try{
    console.log('no hay problemas');
    saludo('brian');

} catch(e){
    console.log(`Este es un error tipo: ${e}`);
console.log('ERROR!');
}