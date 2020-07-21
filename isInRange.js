function isInRange(num,min,max) {
    if (num <= max && num >= min) {
        return true;   
    }
    return false;
}

console.log(isInRange(25, 50, 100));