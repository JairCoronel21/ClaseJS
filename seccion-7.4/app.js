// Cuel es el  mayor de un arreglo

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];

let mayor = -99999;

for(i = 0; i <= numeros.length; i++){
    if (numeros[i] >= mayor) {
        mayor = numeros[i];
    }
}
console.log('El nuúmero mayor es: ' + mayor)