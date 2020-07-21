module.exports = function (n1, n2) {
  // check if n1 or n2 are not numbers
  if (isNaN(n1) || isNaN(n2)){
    return false;
  }
  return n1 - n2;
};
