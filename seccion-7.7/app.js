/*Crear una función que reciba 3 argumentos 
numéricos (a,b,c), la función se debe llamar
max, la función debe de determinar cual es el mayor de
los 3 y retornarlo... la función debe de trabajar así:
*/



function max(a, b, c) {
  // declarando la variable
  let mayor;
  // a es mayor a b
  if (a > b){
    if (a > c){
      mayor = a;
    }else{
      mayor = c;
    }
  }else{
    if (b>c){
      mayor = b;
    }else{
      mayor = c;
    }
  }
  //retornando la variable
  return mayor;
}

let mayor = max(5, 2, 6);//6

console.log(mayor);
