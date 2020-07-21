function countToNum(num) {
    var result = '';
    for (var index = 0; index < num; index++) {
        result = result + index;
    }
    return result;
}

console.log(countToNum(5));