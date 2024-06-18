const reverseString = function(str) {
    str = str.split('');
    str = str.reverse();
    str = str.join('');
    return str;
};

// Do not edit below this line
module.exports = reverseString;
