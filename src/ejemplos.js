const nombre = 'mundo';
let message = 'Hola ' + nombre + 
  ' continuo en otra linea'
let a = 2, b = 2
message = `Hola ${nombre} sigo salto a otra ${a + b.toString()} ${a * b}`
console.log(message)
b = '2'
message = `Hola ${nombre} sigo salto a otra ${a + +b} ${a * b}`
// Update header text
document.querySelector('#header').innerHTML = message
message = true
if(message) {
  console.log('Es boolean')
} else
    console.log('No es boolean')
// Log to console
console.log(message)
