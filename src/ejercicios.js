const aleatorio = (inicio, rango) => {
    return parseInt((inicio + Math.random() * rango))
}

const creaArray = (elementos, value = 0) => {
    let t = []
    for (let i = 0; i < elementos; i++)
        t[i] = value
    return t
}

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