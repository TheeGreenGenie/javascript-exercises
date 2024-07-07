const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    newStr = str.split('').reverse().join('');
    return (str === newStr);
};

// Do not edit below this line
module.exports = palindromes;
