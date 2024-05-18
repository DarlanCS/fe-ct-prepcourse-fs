function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let palabrasconcatenadas = "";
  for (var i = 0; i<palabras.length;i++) {
    palabrasconcatenadas += palabras[i];
    if (i< palabras.length -1) {
      palabrasconcatenadas += " ";
    }
  }
  return palabrasconcatenadas
}

module.exports = dePalabrasAFrase;
