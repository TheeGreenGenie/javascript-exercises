const findTheOldest = function(arr) {
    let now = new Date().getFullYear(),
    newArr = {name: 'N/a', age: 0};
    arr.forEach(element => {
        let ourName = element.name,
            birth = element.yearOfBirth,
            death = element.hasOwnProperty('yearOfDeath')? element.yearOfDeath : now,
            ourAge = death-birth;
        if (ourAge > newArr.age) {
            newArr = {name: ourName, age: ourAge};
        } 
    });
    return newArr;
};

// Do not edit below this line
module.exports = findTheOldest;