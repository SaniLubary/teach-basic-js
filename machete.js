// Para poder correr el archivo, en una consola asegurate de estar parada en la carpeta de este archivo
// y posteriormente corre el comando 'node ./machete.js'

// 'let' es una palabra clave usada para crear una variable, se usa solo la primera vez que se crea una variable, despues simplemente la usas/reasignas
// 'const' tambien es uan palabra clave para crear una variable, la diferencia es que estas variables no las podes reasignar/modificar
//      Si no usas ni 'let' ni 'const' para definir tu variable, entonces la misma se considera en el ambito global del archivo, 
// ahora eso no nos molesta, pero mas adelante veremos la utilidad de usarlos aproppiadamente, por lo que por ahora es mejor 
// acostumbrarse a usarlos. 

// Reasignar un let no hay problema
let nombre = 'steffif'
console.log(nombre)
nombre = 'saanti'
console.log(nombre)

// Ademas de reasignar, puedes sumar textos de la siguiente forma
const stringsUnidos = nombre + " y Steffita"
console.log("Esto es un string unido con otro: ", stringsUnidos)

// Reasignar un const te va dar un error (descomentar lineas 13 y 14 para visualizar el error al correr el archivo JS)
const age = 26
console.log(age)
//age = 35
//console.log(age)

// Puedes sumar numeros..
console.log('Numeros sumados: ', age + age)

// Así se ve un boolean
const soyBoolean = true
console.log('La variable soyBoolean es: ', soyBoolean)

// Así se ve un number
const soyNumber = 123
console.log('La variable soyNumber es: ', soyNumber)

// Así se ve un float
const soyFloat = 123.123
console.log('La variable soyFloat es: ', soyFloat)

// Así se ve un array
const soyArray = ['Hola', 123, false]
console.log('La variable soyArray es: ', soyArray)

// Así se ve un objeto
const soyObjeto = {
    name: 'Objeto X',
    x: 50,
    y: 50
}
console.log('La variable soyObjeto es: ', soyObjeto)

// Un objeto anidado, con arrays y todo tipo de datos se veria algo asi
const user = {
    name: 'santi', 
    age: 26,
    friends: [
        {
            name: 'Sebita',
            age: 27,
            occupation: 'Programmer'
        },
        {
            name: 'Carlos',
            age: 25,
            occupation: 'Remax Agent'
        }
    ],
    wife: {
        name: "Steffitaa",
        age: 36,
        occupation: "Por ahora tech writer"
    },
}
console.log('El objeto grande se veria asi', user.friends[0].name)