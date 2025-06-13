/** 
 * Modificar la condición del if dentro del Loop
 * para que el resultádo en pantalla sean
 * múltiplos del valór de la variable 'multiploDe'
 * 
 * Tip: Googlear cómo encontrar el multiplo de un número
 */

// const numeros = [23,4,11,5,46,9,3,40,12,42,312,61,546,123,2,64]
// const multiploDe = 8
// 
// for (let index = 0; index < numeros.length; index++) {
//     /**
//      * Acá iria un 'if' con una condición específica 
//      * y un 'console.log(numeros[index])' adentro
//      * para poder ver el resultado en pantalla de los multiplos
//      */
//     if (numeros[index] % multiploDe == 0){
//         console.log(numeros[index])   
//     }
// }
 
   



const numeros = [23,4,11,5,46,9,3,40,12,42,312,61,546,123,2,64]
const multiploDe = 3
let resultado = '3'


for (let i = 0; i < numeros.length; i++) {
    
    console.log('Numero: ', numeros[i], 'Numero % 3: ', numeros[i] % 3)
    console.log('Mi condicion: ', numeros.length % 3 <= 0)

    if (numeros.length % 3 <= 0){
      console.log('exito')  
    } 

    // console.log(numeros[i])   
}

        
   


/**
     * Acá iria un 'if' con una condición específica 
     * y un 'console.log(numeros[i])' adentro
     * para poder ver el resultado en pantalla de los multiplos
     */