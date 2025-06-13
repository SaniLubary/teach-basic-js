/**
 * Crear un For loop con if adentro que devuelva la suma
 * de todos los elementos del array y el numero mas alto
 * encontrado
 *  
 * Necesito dos console.log
 * 
 * Uno:
 * Muestre en consola un numero, el resultado
 * de la suma de los elementos del array
 * 
 * Dos:
 * Muestre en consola el numero más alto del array
 * 
 * 
 * Tip: Resolver primero el Uno por completo con una nueva
 * variable para almacenar el resultado, una vez
 * tengas el resultado correcto, ahi recien agregar otra
 * nueva variable para almacenar el segundo resultado
 */

const sumarme = [2,1,8,41,10,80]
let sum = 0;
let numeroMayor = 0
for (let i = 0; i < sumarme.length; i++) {
    sum = sum + sumarme[i];
    
    let pasado
    if (i == 0) {
        pasado = 0
    } else {
        pasado = sumarme[i-1]
    }
    const actual = sumarme[i]
    
    if (actual > pasado) {
        numeroMayor = actual
    }
}

console.log(sum)
console.log(numeroMayor)


//   3     5   2   10
//   ^
// 3(actual) > 5(futuro)
//   0

//   3     5     2   10
//         ^
//       5 > 2
//         5

//   3     5     2   10
//               ^
//             2 > 10
//               5

//   3     5     2   10
//                   ^
//                 10 > (numeroMayor == 5)
//                   5

// actual > futuro -> numero mayor