import otro from './utils.js'
var local = 'Soy el modulo 2'

function cotilla() {
    return `MOD2: ${local}`
}

function fnMod1() {
    console.log(cotilla())
}

function comun() {
    return otro(`Mod2`)
}
export {fnMod1 as fnMod2, comun}
