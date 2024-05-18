function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let elementosVistos = {}; // Objeto para rastrear los elementos vistos

  for (let i = 0; i < numeros.length; i++) {
    if (elementosVistos[numeros[i]] !== undefined) {
      return numeros[i]; // Se encontró el primer elemento repetido
    } else {
      elementosVistos[numeros[i]] = true; // Marca el elemento como visto
    }
  }
}

module.exports = encontrarElementoRepetido;