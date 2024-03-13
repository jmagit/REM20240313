import may from './utils.js'

var local = 'Soy el modulo 1'

function cotilla() {
    return `MOD1: ${local}`
}

export function fnMod1() {
    console.log(cotilla())
}
export function comun() {
    return may(`mod1`)
}