// #Module protects their variables and functions from leaking into global scope

console.log("Sum module loaded");
var x = "hello World";
const calculateSum = (a, b) => {
    const sum = a + b;
    console.log("Sum of " + a + " and " + b + " is: " + sum);
}

module.exports = {x, calculateSum};

// console.log(module.exports);

// you can use module exports like this also
module.exports.x = x;
module.exports.calculateSum = calculateSum;    