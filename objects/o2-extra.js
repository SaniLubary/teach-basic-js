/**
 * EJERCICIO DE ARRAYS - Operaciones Avanzadas
 * 
 * Completa las funciones para que pasen todas las pruebas
 * 
 * 1. filtrarPares: Devuelve un array con solo los números pares
 * 2. duplicarNumeros: Devuelve un array con cada número duplicado
 * 3. sumarTodos: Devuelve la suma de todos los números del array
 * 4. encontrarMayor: Devuelve el número más grande del array
 * 5. invertirArray: Devuelve el array en orden inverso
 * 6. contarVocales: Cuenta cuántas vocales hay en el array de strings
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const palabras = ['hola', 'mundo', 'javascript', 'programacion', 'arrays']

// 1. Filtrar números pares
function filtrarPares(arr) {
    // TODO: Usar filter() para devolver solo números pares
    return []
}

// 2. Duplicar cada número
function duplicarNumeros(arr) {
    // TODO: Usar map() para duplicar cada número
    return []
}

// 3. Sumar todos los números
function sumarTodos(arr) {
    // TODO: Usar reduce() para sumar todos los números
    return 0
}

// 4. Encontrar el número más grande
function encontrarMayor(arr) {
    // TODO: Usar Math.max() o reduce() para encontrar el máximo
    return 0
}

// 5. Invertir el array
function invertirArray(arr) {
    // TODO: Usar reverse() o crear un nuevo array invertido
    return []
}

// 6. Contar vocales en un array de strings
function contarVocales(arr) {
    // TODO: Contar todas las vocales (a, e, i, o, u) en todos los strings
    return 0
}

// PRUEBAS - No modificar estas líneas
console.log('=== PRUEBAS DE ARRAYS ===')

console.log('1. Números pares:', filtrarPares(numeros))
// Resultado esperado: [2, 4, 6, 8, 10]

console.log('2. Números duplicados:', duplicarNumeros(numeros))
// Resultado esperado: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

console.log('3. Suma total:', sumarTodos(numeros))
// Resultado esperado: 55

console.log('4. Número mayor:', encontrarMayor(numeros))
// Resultado esperado: 10

console.log('5. Array invertido:', invertirArray(numeros))
// Resultado esperado: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log('6. Vocales contadas:', contarVocales(palabras))
// Resultado esperado: 8 (h-o-l-a, m-u-n-d-o, j-a-v-a-s-c-r-i-p-t, p-r-o-g-r-a-m-a-c-i-o-n, a-r-r-a-y-s)

console.log('=== FIN DE PRUEBAS ===')
