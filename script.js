//EJERCICIO 1

// let number = parseInt(prompt('Ingresa un número'));
// let factorial = 1;

// for(let i=1; i<=number; i++){
//     factorial=factorial*i;
// }

// console.log(factorial);

//EJERCICIO 2

// const arrayestudiantes = [
//     {
//         nombre: 'david',
//         nota: 80
//     },
//     {
//         nombre: 'vinoth',
//         nota: 77
//     },
//     {
//         nombre: 'divya',
//         nota: 88
//     },
//     {
//         nombre: 'ishita',
//         nota: 95
//     },
//     {
//         nombre: 'thomas',
//         nota: 68
//     },
// ]

// let suma = 0;
// let promedio = 0;

// for (let i = 0; i < arrayestudiantes.length; i++) {
//     suma = suma + arrayestudiantes[i].nota;
// }

// promedio = suma/arrayestudiantes.length

// console.log(promedio);

// if(promedio<60) {
//     console.log('F');
// } else if (promedio>=60 && promedio<70){
//     console.log('D');
// }else if (promedio>=70 && promedio<80){
//     console.log('C');
// }else if (promedio>=80 && promedio<90){
//     console.log('B');
// } else {
//     console.log('A');
// }


// EJERCICIO 3

// for (let i = 1; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' es par');
//     } else {
//         console.log(i + ' es impar');
//     }
// };

// EJERCICIO 4

// for (let i = 1; i <= 100; i++){
//     if(i%15===0){
//         console.log('FizzBuzz');
//     } else if(i%5===0){
//         console.log(i + ' Buzz');
//     } else if( i%3===0){
//         console.log(i + ' Fizz');
//     } else {
//         console.log(i);
//     }
// }


//EJERCICIO 5

// const arreglo = [5, 1, 8, 6, 3];
// let arregloNuevo = [];

// for (let i = arreglo.length-1; i >=0; i--) {
//     arregloNuevo.push(arreglo[i]);
// }

// console.log(arregloNuevo);

//EJERCICIO 6

// let texto = prompt('Ingrese una palabra');
// let textoinvertido = '';

// for (let i = texto.length - 1; i >= 0; i--) {
//     textoinvertido = textoinvertido + texto[i];
// }

// console.log(textoinvertido);


// EJERCICIO 7

// let number = parseInt(prompt('Ingrese un núnero'));
// let exponente = parseInt(prompt('Ingrese el exponente'));
// let potencia = 1;

// for (let i = 1; i <= exponente; i++) {
//     potencia = number*potencia;
// }

// console.log(potencia);

//EJERCICIO 8

// const arreglo = [2, 8, 5, 3, 1];
// let suma = 0;

// for (let i = 0; i <= arreglo.length - 1; i++) {
//     suma += arreglo[i];
// }

// console.log(suma);

//EJERCICIO 9

// const arreglo = [4, 5, 1, 8, 3];
// let mayor = arreglo[0];

// for (let i = 1; i < arreglo.length; i++) {
//     if (mayor < arreglo[i]) {
//         mayor = arreglo[i];
//     }
// }

// console.log(mayor);

//EJERCICIO 10

// const arreglo = [3, 4, 5, 12, 6, 1, 13];
// let arreglopar = [];

// for(let i = 0 ;  i<arreglo.length; i++){
//     if(arreglo[i]%2 === 0){
//         arreglopar.push(arreglo[i]);
//     }
// }

// console.log(arreglopar);

// EJERCICIO 11

const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false,
    },
];

for( let i=0; i<library.length; i++){
    if (library[i].readingStatus===true){
        console.log('Los libros leídos son: ' + library[i].title + ' de ' +library[i].author);
    }
}

