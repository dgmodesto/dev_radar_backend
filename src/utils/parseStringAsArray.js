module.exports = function paseStringAsArray(arraAsString) {
  return arraAsString.split(',').map(tech => tech.trim());
}