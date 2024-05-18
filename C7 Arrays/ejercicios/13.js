function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var arrayNumerosPares = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayNumerosPares.push(array[i]);
    }
  } 
  return arrayNumerosPares
}



module.exports = filtrarNumerosPares;
