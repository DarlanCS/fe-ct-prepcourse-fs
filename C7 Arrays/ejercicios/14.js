function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var cantidadMayoresA10 = 0;
  for (i=0; i<array.length; i++) {
    if (array[i] > 10) {
      cantidadMayoresA10++;
    }
  }
  return cantidadMayoresA10;

}

module.exports = contarElementosMayoresA10;
