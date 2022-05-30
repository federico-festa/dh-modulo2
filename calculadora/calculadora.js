let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

console.log(sumar(2,2));
console.log(restar(2,1));
console.log(multiplicar(2,3));
console.log(multiplicar(2,0));
console.log(dividir(6,3));
console.log(dividir(2,0));

//a. ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación matemática, hubiésemos programado todo en un mismo archivo?
//b. ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?
//c. ¿Será esta metodología de trabajo una constante de aqui en adelante?