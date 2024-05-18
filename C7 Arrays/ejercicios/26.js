function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
let primermultiplo 
for (var i = 0; i < secuencia.length; i++) {
if (secuencia[i] % n === 0) {
  primermultiplo = secuencia [i];
  break;
}
}
return primermultiplo
}

module.exports = encontrarPrimerMultiploDeN;