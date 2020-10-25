module.exports = function reverse (n) {
  let result = 0;
  if (n < 0) {
    n = n*(-1);
  }
  n = n.toString().split("").reverse().join("");
  return result = +n;
}
