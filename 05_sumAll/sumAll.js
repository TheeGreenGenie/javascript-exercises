const sumAll = function(minimum, maximum) {
    let sum = 0;
    if (minimum < 0 || maximum < 0 || typeof(minimum) != 'number' || typeof(maximum) != 'number') {
        return "ERROR"
    }
    if (minimum>maximum) {
        [minimum, maximum] = [maximum, minimum]
    }
    for (let i=minimum; i <= maximum; i++) {
        sum+=i
    }
    return sum
};
// Do not edit below this line
module.exports = sumAll;
