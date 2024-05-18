function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }

  // Encuentra el número más pequeño y más grande en el array
//en este contexto, los puntos suspensivos (...) permiten pasar los elementos de un array como argumentos individuales a una función, en lugar de pasar el array completo como un solo argumento.
  let min = Math.min(...numeros);
  let max = Math.max(...numeros);

  // Calcula la suma esperada de la secuencia completa
  let sumaEsperada = ((min + max) * (max - min + 1)) / 2;

  // Calcula la suma real de la secuencia
  let sumaReal = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumaReal += numeros[i];
  }

  // Compara la suma esperada con la suma real para encontrar el número faltante
  if (sumaReal === sumaEsperada) {
    return null; // No hay números faltantes
  } else {
    return sumaEsperada - sumaReal; // Devuelve el número faltante
  }
}
module.exports = encontrarNumeroFaltante;