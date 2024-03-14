const aleatorio = (inicio, rango) => {
    return parseInt((inicio + Math.random() * rango))
}

// eslint-disable-next-line no-unused-vars
const creaArray = (elementos, value = 0) => {
    let t = []
    for (let i = 0; i < elementos; i++)
        t[i] = value
    return t
}

// eslint-disable-next-line no-unused-vars
function damePrimos(num) {
    var calculos = 0;
    var cuantos = +num;
    var rslt = [];
    var candidato = 2;
    while (cuantos) {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            var esPrimo = true;
            for (var indice in rslt) {
                calculos++;
                if (candidato % rslt[indice] == 0) {
                    esPrimo = false;
                    break;
                }
            }

            candidato++;
            if (esPrimo) {
                rslt.push(candidato - 1);
                break;
            }
        }
        cuantos--;
    }
    console.log('Coste función: ' + calculos);
    return rslt;
}

function esNIF(nif) {
    if (!/^\d{1,8}[A-Za-z]$/.test(nif))
        return false;
    const letterValue = nif.substr(nif.length - 1);
    const numberValue = nif.substr(0, nif.length - 1);
    return letterValue.toUpperCase() === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23);
}

function esPalindromo(cadena) {
    if (typeof (cadena) != "string" || cadena.trim().length == 0) return false;
    cadena = cadena.replace(/[ .,;:#¿?¡!()[\]{}=+\-*/_`~$%^&'"]/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    for (let i = 0; i < cadena.length - i; i++) {
        if (cadena.charAt(i) !== cadena.charAt(cadena.length - 1 - i)) return false;
    }
    return true;
}

// eslint-disable-next-line no-unused-vars
class Juego {
    constructor() {
        this.intentos = 10
        this.objetivo = aleatorio(1, 100)
        this.mensaje = 'Sin empezar'
        this.terminado = false     
    }
    juega(numero) {
        if (this.intentos <= 0 || this.terminado) {
            this.mensaje = 'Juego terminado'
            return
        }
        if (isNaN(+numero)) {
            this.mensaje = 'No es un numero'
            return
        }
        numero = +numero
        this.intentos--
        if(this.objetivo > numero) {
            this.mensaje = 'Es menor que el buscado'
        } else if(this.objetivo < numero) {
            this.mensaje = 'Es mayor que el buscado'
        } else {
            this.mensaje = 'Acertaste'
            this.terminado = true
        }
    }
}