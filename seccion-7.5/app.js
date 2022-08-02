// Cuel es el  mayor de un arreglo

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];

//Error en tiempo de ejecución

for(i = 0; i < numeros.length; i++){
   let numero = numeros[i];

   if ((numero % 2) == 0) {
    console.log('Numero : ' + numero+ ' es par');
   }else{
    console.log('Numero : ' + numero+ ' es impar');
   }
}