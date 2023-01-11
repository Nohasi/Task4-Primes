"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = void 0;
var isPrime = function (value) {
    var factorArray = [];
    var primeFlag = true;
    // Loops through all numbers smaller than value
    for (var i = 2; i < value; i++) {
        // If value can be divided by any number with 0 remainder -> Not prime.
        if (value % i === 0) {
            factorArray.push(i);
            primeFlag = false;
        }
    }
    return { primeFlag: primeFlag, factorArray: factorArray };
};
exports.isPrime = isPrime;
