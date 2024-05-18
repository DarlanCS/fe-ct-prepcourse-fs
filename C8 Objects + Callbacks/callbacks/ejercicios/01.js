function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // NOTA: no debes retornar nada.
   // Tu código:
   cb();
}
function miCallback() {
  console.log("¡Hola desde el callback!");
}

invocarCallback(miCallback);

module.exports = invocarCallback;
