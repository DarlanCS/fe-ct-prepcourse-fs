function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
 
  let i = num;
  let count = 0;
  do {
    i+=5;
    count++
  } while (count < 8);
  return i
}

module.exports = doWhile;