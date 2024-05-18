function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  var n= array.length;
  for (var i =0; i <n-1;i++) {
    for (var j = 0; j<n-i-1;j++) {
      if (array[j]>array[j+1]) {
        var temp = array[j];
        array[j]=array[j+1];
        array[j+1]= temp 
      }
    }
  }   
  return array;
}

module.exports = ordenarArray;
