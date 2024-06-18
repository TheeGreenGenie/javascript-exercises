const repeatString = function(str, repetitions) {
    let term = '';
    if (repetitions < 0) {
        return 'ERROR';
    }
    while (repetitions > 0) {
        term+=str;
        repetitions--;
    }
    return term
};

// Do not edit below this line
module.exports = repeatString;
