const fibonacci = function(num) {
    const arr = []
    if (num < 0) {
        return 'OOPS'
    }
    if (num == 0) {
        return 0
    }
    for (let i = num; i > 0; i--) {
        let num = 1
        if (arr.length < 2) {
            arr.push(num)
        } else {
            num = Number(arr[arr.length-1])+Number(arr[arr.length-2])
            arr.push(num)
        }
    }
    return arr[arr.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
