/**
 * Quiero que el array cleanArray tenga los datos de inputArray menos los de notIncludingArray
 * 
 * Ejemplo de input y notIncluding
 * inputArray = ['steffita', 'santi', 'manzana', 'pepe', 'roberto']
 * notIncludingArray = ['manzana', 'banana', 'pera']
 * 
 * Ejemplo de cleanArray, que es el array resultante (notese que 'manzana' ya no esta en el 
 * array resultante, ya que fue limpiado al ser encontrado en el array 'notIncludingArray')
 * cleanArray = ['steffita', 'santi', 'pepe', 'roberto']
 * 
 * Tip: Buscar como agregar un elemento a un array
 */

// const inputArray = ['steffita', 'santi', 'manzana', 'pepe', 'pera', 'roberto']
// const notIncludingArray = ['manzana', 'banana', 'pera']
const inputArray = [1,2,3,4,5,6,7,23452,34,52,34,2344,4,543,34, 'pera',2345,2,3,]
const notIncludingArray = [1,2,3,34, 'pera']
const cleanArray = []
for (let iInput = 0; iInput < inputArray.length; iInput++){
    let shouldInclude = true
    // console.log('-------------', iInput ,'-------------')
    for (let iNotIncluding = 0; iNotIncluding < notIncludingArray.length; iNotIncluding++) {
        // console.log(iNotIncluding, notIncludingArray[iNotIncluding])
        
        if (inputArray[iInput] == notIncludingArray[iNotIncluding]) {
            shouldInclude = false
        }
    }

    if (shouldInclude) {
        // console.log(inputArray[iInput])
        cleanArray.push(inputArray[iInput])
    } else {
        console.log("Should NOT include: ", inputArray[iInput])
    }
};

console.log('-----------')
console.log(cleanArray)








// analizar inputArray[0] == notIncludingArray[0] ? no? entonces seguir con posicion 1 de notIncludingArray
// cuando se cumpla la condicion de que un valor es limipio y debe pasar a cleanArray, hacer: cleanArray.push(valor)

// console.log(cleanArray)
// cleanArray.push(1)
// console.log(cleanArray)
// cleanArray.push('quitarme')
// console.log(cleanArray)
// cleanArray.push('hola')
// console.log(cleanArray)
// for loop
//  logic...
// clean array