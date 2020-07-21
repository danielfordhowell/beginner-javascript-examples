function printTree(num) {
    var result = '';
    for (var index1 = 0; index1 < num; index1++) {
        var stars = '';
        for (var index2 = 0; index2 <= index1; index2++) {
            stars = stars + '*';
        }
        result = result + stars + '\n';
    }
    return result;
}

console.log(printTree(4))

    