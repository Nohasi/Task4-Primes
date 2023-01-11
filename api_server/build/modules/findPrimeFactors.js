"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPrimeFactors = void 0;
var findPrimeFactors = function (value) {
    // Sieve of Eratosthenes-like
    // Using a set because same divisor can be used multiple times, so this avoids duplicates
    var primeFactors = new Set();
    var divisor = 2;
    while (value >= 2) {
        if (value % divisor === 0) {
            // If factor is found, value is divided by divisor
            primeFactors.add(divisor);
            value /= divisor;
        }
        // If not, divisor is incremented
        else {
            divisor++;
        }
    }
    return primeFactors;
};
exports.findPrimeFactors = findPrimeFactors;
