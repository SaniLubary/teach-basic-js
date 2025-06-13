// modifica la variable 'resultado' para que se le sume el valor de x a modo string, para obtener el valor '0 1 2 3 4'

let resultado = ''

let x = 0
const repeticiones = 190
const iterateBy = 50
while (x <= repeticiones) {
    // si x es menos que repeticiones, Y si el futuro de x (x+2) tambien es menor o igual a repeticiones
    // entonces proseguir con un -, si el futuro (x+2) es mayor  que repeticiones, entonces
    // tratar el presente como la ultima iteracion del loop
    if (x < repeticiones && x+iterateBy <= repeticiones) {
        resultado = resultado + x + '-'
    } else {
        resultado = resultado + x
    }
    //x = x+1;   
    //x++
    x += iterateBy
}


// ... 16                           18                                           20 
//     ^                            ^                                             ^
//  entra al loop                entra al loop                               no entra al loop
// es x menor a 19? si -> 16-  es 18 < 19 ? si -> 18-??             

console.log(resultado)


let texto = 'a' // en un loop esta es la variable base
texto = texto + 'b' // en la siguiente iteracion, le sumas a la base, algo extra
texto = texto + 'c' // esta es siguiente iteracion, sumas mas cosas

//console.log(texto)
const array = [1, 2, 3]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    //console.log(element)
}

