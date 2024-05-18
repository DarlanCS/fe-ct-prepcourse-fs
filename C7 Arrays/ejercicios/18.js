function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sumaNotas = 0;
  for (var i=0; i < resultadosTest.length; i++) {
   sumaNotas+= resultadosTest[i];
  }
  var promedio = sumaNotas / resultadosTest.length;
  return promedio
}

module.exports = promedioResultadosTest;
