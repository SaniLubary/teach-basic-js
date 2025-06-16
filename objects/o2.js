// Crear un objeto llamado usuario con las siguientes propiedades:
// - nombre
// - permisos array de strings con algunos permisos
// - notificar:
//              Metodo que imprima un mensaje usando una propiedad del objeto 
//              (nombre) y un mensaje escrito en las props del objeto
//              - El mensaje puede tener variables escritas con un formato especifico
//              (mostrado en el ejemplo del console.log mas abajo), por lo que deberas
//              usar una herramienta como RegExp para reemplazar las variables con los
//              valores de las propiedades del objeto.
//              - El metodo debe devolver el mensaje con las variables reemplazadas
//              por los valores de las propiedades del objeto.
//              - El metodo debe imprimir el mensaje en la consola.

const usuario = {}

console.log(usuario.notificar('Hola %nombre%! Tus permisos son: %permisos%'));