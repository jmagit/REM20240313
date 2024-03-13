acoplado = 'Valor en ejemplo2.js'

const kk = function() {
    return 'definida en ejemplo2.js'
}
const kkk = () => 'definida en ejemplo2.js'

const suma = (a,b)=>a+b
const resta = (a,b)=> {
    return a-b
}
const punto = c => ({ x: c, y: c })

console.log(suma(2,2), punto(10))

function calc() {
    const a = 2;
    if(true) {
        let b = 1;
    }
    c = ++a  + b;
}

if(calc()) {
    console.log('var iguales')
} else 
    console.log('var distintas')
