function convertNumToRoman(num) {
  if (num <= 3) {
    var result = "";
    for (var i = 0; i < num; i++) {
      result = result + "I";
    }
    return result;
  } else if (num === 4) {
    return "IV";
  } else if (num === 5) {
    return "V";
  }
  return false;
}

console.log(convertNumToRoman(1));
console.log(convertNumToRoman(2));
console.log(convertNumToRoman(3));
console.log(convertNumToRoman(4));
console.log(convertNumToRoman(5));
