function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let result = ''; // Inicializamos una cadena vacía para almacenar el resultado
  
  // Definimos la longitud máxima que tendrá el bucle (la longitud de la cadena más larga)
  let maxLength = Math.max(str1.length, str2.length, str3.length);
  
  // Iteramos sobre cada posición de las cadenas
  for (let i = 0; i < maxLength; i++) {
    // Si la cadena 1 no está vacía, agregamos su caracter correspondiente a la cadena resultante
    if (str1[i] !== undefined) {
      result += str1[i];
    }
    // Si la cadena 2 no está vacía, agregamos su caracter correspondiente a la cadena resultante
    if (str2[i] !== undefined) {
      result += str2[i];
    }
    // Si la cadena 3 no está vacía, agregamos su caracter correspondiente a la cadena resultante
    if (str3[i] !== undefined) {
      result += str3[i];
    }
  }
  
  return result;
}


module.exports = combine;