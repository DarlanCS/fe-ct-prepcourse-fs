function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código
var newArray= []
for (var i= array.length-1;i>=0;i--) {
  newArray.push(array[i]);
}
return newArray;
  }


module.exports = invertirArray;
