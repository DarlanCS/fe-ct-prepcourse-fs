function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var newarray = []
  for (var i = 0; i<array.length;i++) {
    newarray.push(array[i]* i);
  }
  return newarray
}

module.exports = multiplicarElementosPorIndice;
