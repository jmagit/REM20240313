const nombre = 'mundo';
acoplado = 'Valor ejemplo'
// const kk = function() {
//     return 'definida en ejemplo1.js'
// }

var message = 'Hola ' + nombre + 
  ' continuo en otra linea'
let a = 2, b = 2
message = `Hola ${nombre} sigo salto a otra ${a + b.toString()} ${a * b}`
console.log(message)
b = '2'
message = `Hola ${nombre} sigo salto a otra ${a + +b} ${a * b}`
// Update header text
document.querySelector('#header').innerHTML = message
message = true
// eslint-disable-next-line no-cond-assign

if(message) {
  console.log('Es boolean')
} else
    console.log('No es boolean')
// Log to console
messaje = a = b = 'c4'
console.log(message)
a = 1;
a += 2; // a = a + 2
a = '2'; b = '2'
if(a === b) {
    console.log('Iguales')
} else {
    console.log('No son idénticos')
}
