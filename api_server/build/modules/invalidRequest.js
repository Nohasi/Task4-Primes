"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidRequest = void 0;
var invalidRequest = function (req) {
    // Check if param does not exist
    if (!('number' in req.query)) {
        return 'The \'number\' parameter is not passed';
    }
    // Check if parameter is empty
    if (req.query.number === "") {
        return 'No number is passed into parameter';
    }
    // Checks if non-number is passed
    if (isNaN(req.query.number)) {
        return "Non-number is passed";
    }
    // number variable to be used in coming checks
    var reqNo = Number(req.query.number);
    // Checks if number passed is a negative, 0, or 1
    if (reqNo <= 1) {
        return "".concat(req.query.number, " is neither prime nor composite");
    }
    // Makes sure numbers passed through are not too big
    if (reqNo > 10000000) {
        return 'Number passed is larger than 10,000,000';
    }
    //Checks if number passed is a float
    if (!Number.isInteger(reqNo)) {
        return 'Value passed is not an integer';
    }
    return null;
};
exports.invalidRequest = invalidRequest;
