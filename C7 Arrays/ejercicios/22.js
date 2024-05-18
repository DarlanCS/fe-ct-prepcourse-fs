function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var resultadotabladelseis = []

  for ( var i = 0; i < 11 ; i++) {
    resultadotabladelseis.push(6*i);
  }
  return resultadotabladelseis;
}

module.exports = tablaDelSeis;
