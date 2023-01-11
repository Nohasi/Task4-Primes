"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var invalidRequest_1 = require("./modules/invalidRequest");
var isPrime_1 = require("./modules/isPrime");
var findPrimeFactors_1 = require("./modules/findPrimeFactors");
var app = express();
app.use(express.json());
app.get('/prime', function (req, res) {
    var errorMessage = (0, invalidRequest_1.invalidRequest)(req);
    // If error message is a string, an error has been found
    if (errorMessage != null) {
        res.status(406);
        res.send({
            error: errorMessage
        });
    }
    else {
        // If primeFlag returns true, value is a prime
        var _a = (0, isPrime_1.isPrime)(req.query.number), primeFlag = _a.primeFlag, factorArray = _a.factorArray;
        if (primeFlag) {
            res.status(200);
            res.send({
                input: Number(req.query.number),
                isPrime: primeFlag,
                allFactors: null,
                primeFactors: null
            });
        }
        // If primeFlag is false, it is not a prime and the number's factors must be displayed
        else {
            res.status(200);
            res.send({
                input: Number(req.query.number),
                isPrime: primeFlag,
                allFactors: factorArray,
                primeFactors: Array.from((0, findPrimeFactors_1.findPrimeFactors)(Number(req.query.number)))
            });
        }
    }
});
var port = 4090;
var server = app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
module.exports = server;
