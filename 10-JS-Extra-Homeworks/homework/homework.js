// No cambies los nombres de las funciones.

const { convertToRecursiveGlob } = require("@11ty/eleventy/src/TemplatePath");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (clave in objeto){
    elt = [clave,objeto[clave]]; //"elt" es un elemento de la matriz
    matriz.push(elt);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var objeto = {};
  for (let i = 0; i < alfabeto.length; i++){
    for (let j = 0; j < string.length; j++){
      if (alfabeto[i]===string[j]){
        if (objeto[alfabeto[i]] !== undefined){
          objeto[alfabeto[i]]++;
          string = string.replace(alfabeto[i],'');
          j--;
        }
        else {objeto[alfabeto[i]] = 1;}
      }
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cadena1 = s;
  var cadena2 = '';
  let i = 0;
  while(i < cadena1.length){
    if (cadena1[i] === cadena1[i].toUpperCase()){
      cadena2 += cadena1[i];
      cadena1 = cadena1.replace(cadena1[i],'');
      continue;
    }
    i++;
  }
  return cadena2 + cadena1;
}

String.prototype.reverse = function reverse(){
  newString = '';
  for (let i = 0; i < this.length; i++){
    newString += this[this.length - i -1];
  }
  return newString;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(' ');
  var cadena = '';
  for (let i = 0; i < array.length; i++){
    cadena += array[i].reverse() + ' ';
  }
  return cadena.slice(0,-1);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  cadena = numero.toString();
  if (cadena === cadena.reverse()){return 'Es capicua'}
  return 'No es capicua' 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let i = 0;
  while(i < cadena.length){
    if (cadena[i] === 'a'){cadena = cadena.replace('a','');}
    else if (cadena[i] === 'b'){cadena = cadena.replace('b','');}
    else if (cadena[i] === 'c') {cadena = cadena.replace('c','');}
    else {i++;}
  }
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var maxIndice = 0;
  for (let i = 0; i < arr.length - 1; i++){
    minIndice = i;
    for (let j = i + 1; j < arr.length; j++){
      if (arr[minIndice].length > arr[j].length){
        minIndice = j;
      }
    }
    temp = arr[minIndice];
    arr[minIndice] = arr[i];
    arr[i] = temp;
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  interseccion = [];
  for (let i = 0; i < arreglo1.length; i++){
    for (let j = 0; j < arreglo2.length; j++){
      if (arreglo1[i] === arreglo2[j]){
        interseccion.push(arreglo1[i]);
        break;
      }
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

