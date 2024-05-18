function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
 
    // Eliminar los espacios y convertir a minúsculas para evitar problemas de sensibilidad a mayúsculas y minúsculas
    let stringProcesado = string.replace(/ /g, '').toLowerCase();
  
    // Comparar el string original con su versión invertida
    return stringProcesado === stringProcesado.split('').reverse().join('');
}
module.exports = esPalindromo;