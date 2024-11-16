// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()

let nombre : string = 'Agustina';
let edad : number = 22;
let esEstudiante : boolean = true;
console.log('Mi nombre es: ', nombre);
console.log('Mi edad es: ', edad);
console.log('Soy estudiante: ', esEstudiante);


// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
// Realizar otra función que reste dos números.
// Realizar otra función que multiplique dos números.

function suma (a: number, b: number): number {
    return a + b
};

function resta (a: number, b: number): number {
    return a-b
};

function multiplicacion (a: number, b: number): number {
    return a * b
}

console.log('La suma entre 5 y 3 es ', suma(5,3));
console.log('La diferencia entre 5 y 3 es ', resta(5,3));
console.log('La multiplicacion de 5 y 3 es ', multiplicacion(5,3));

// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())

let numeros: number[] = [1, 2, 3];
console.log('Los numeros que hay en el array son:');
numeros.forEach( n => console.log(n));

// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola.

interface Persona {
    nombre: string,
    edad: number,
    esEstudiante: boolean
}

let persona1: Persona = {nombre: 'Maria', edad: 28, esEstudiante: false};
let persona2: Persona = {nombre: 'Pedro', edad: 35, esEstudiante: false};
let persona3: Persona = {nombre: 'Celeste', edad: 18, esEstudiante: true};

console.log(persona1, persona2, persona3);

// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.

let variable: string | number;
variable = 'Primero soy una cadena';
console.log(variable);
variable = 2;
console.log(variable);

// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

interface Producto {
    nombre: string;
    precio: number;
    enStock: boolean;
}

let productos: Producto[] = [
    {nombre: 'Mouse', precio: 10, enStock: true},
    {nombre: 'Teclado', precio: 20, enStock: true},
    {nombre: 'Monitor', precio: 50, enStock: true},
    {nombre: 'Parlantes', precio: 15, enStock: false},
    {nombre: 'Mousepad', precio: 3, enStock: true},
    {nombre: 'Notebook', precio: 100, enStock: false}
];

function tienenStock (productos: Producto[]): Producto[] {
    return productos.filter(p => p.enStock);
};

function noTienenStock (productos: Producto[]): Producto[] {
    return productos.filter(p => !p.enStock);
};


console.log('Estos productos tienen stock');
console.log(tienenStock(productos));
console.log('Estos productos no tienen stock');
console.log(noTienenStock(productos));

// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

interface Cliente {
    id: number;
    nombre: string;
    edad: number;
    activo: boolean;
}

let clientes: Cliente[] = [
    {id: 1, nombre: 'Jose', edad: 57, activo: false},
    {id: 2, nombre: 'Eliana', edad: 24, activo: true},
    {id: 3, nombre: 'Pilar', edad: 15, activo: false},
    {id: 4, nombre: 'Marcos', edad: 42, activo: true},
    {id: 5, nombre: 'Ana', edad: 33, activo: false},
    {id: 6, nombre: 'Pablo', edad: 29, activo: true}
];

function estanActivos (clientes: Cliente[]): Cliente[] {
    return clientes.filter(c => c.activo);
};

function noActivos (clientes: Cliente[]): Cliente[] {
    return clientes.filter(c => !c.activo);
};


console.log('Estos clientes estan actvos');
console.log(estanActivos(clientes));
console.log('Estos clientes no estan actvos');
console.log(noActivos(clientes));

// Ejercicio 8: Catálogo de Productos - forEach
// Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
// Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 

interface Producto {
    nombre: string;
    precio: number;
    enStock: boolean;
}

let catalogo: Producto[] = [
    {nombre: 'Mouse', precio: 10, enStock: true},
    {nombre: 'Teclado', precio: 20, enStock: true},
    {nombre: 'Monitor', precio: 50, enStock: true},
    {nombre: 'Parlantes', precio: 15, enStock: false},
    {nombre: 'Mousepad', precio: 3, enStock: true},
    {nombre: 'Notebook', precio: 100, enStock: false}
];

catalogo.forEach(p => console.log(p.nombre, p.precio));

// Ejercicio 9: Catálogo de Productos - filter
// Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
// Imprimor productosBaratos en la consola.

let productosBaratos = catalogo.filter(p => p.precio < 50);
console.log('Los productos menores a 50 son');
console.log(productosBaratos);

// Ejercicio 10: Actualización de Inventario - map
// Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
// Imprimir catalogoConDescuento en la consola.

let catalogoConDescuento = catalogo.map(p => p.precio = p.precio*0.9);
console.log(catalogoConDescuento);

// Ejercicio 11: Búsqueda de Usuario - find
// Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
// Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
// Imprimir en la consola el objeto del usuario encontrado.

interface Usuario {
    id: number;
    nombre: string;
    activo: boolean;
}

let usuarios: Usuario[] = [
    {id: 1, nombre: 'Jose', activo: false},
    {id: 2, nombre: 'Eliana', activo: true},
    {id: 3, nombre: 'Pilar', activo: false},
    {id: 4, nombre: 'Marcos', activo: true},
    {id: 5, nombre: 'Ana', activo: false},
    {id: 6, nombre: 'Pablo', activo: true}
];

let user3 = usuarios.find(u => u.id === 3);
console.log('El usuario con id 3 es ', user3);

// Ejercicio 12: Contador de Usuarios Activos - filter y length
// Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
// Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length 

let usuariosActivos = usuarios.filter(u => u.activo);
let cantUsusariosActivos = usuariosActivos.length;

console.log('Hay ', cantUsusariosActivos, ' ususarios activos');

// Ejercicio 13: Actualización de Estado de Usuarios
// Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
// Imprimir el array usuarios para verificar que todos los usuarios están inactivos.

usuarios.forEach(u => u.activo = true);
console.log(usuarios);

// Ejercicio 14: Formateo de Productos para Mostrar - map
// Usar el array catalogo.
// Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
// Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
// Imprimir el array productosFormato en la consola.

let productosFormato = catalogo.map(p => {return `Producto: ${p.nombre}, Precio: ${p.precio}`});
console.log(productosFormato);

// Ejercicio 15:
// Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:

interface User {
    name: string;
    age: number;
    occupation: string;
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logUser(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logUser);

// Ejercicio 16:
// Vamos a volver a usar la interfaz User del ejercicio anterior.
// Crear una nueva interfaz Admin segun los datos que tenemos.
// Corregir el type Person para que acepte dos tipos: User y la nueva interfaz. 
// Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores. 

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;
const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);