const express = require('express');

import { invalidRequest } from "./modules/invalidRequest";
import { isPrime } from "./modules/isPrime";
import { findPrimeFactors } from "./modules/findPrimeFactors";

const app = express();

app.use(express.json());

app.get('/prime', (req: any, res: any) => {
    let errorMessage: string | null = invalidRequest(req);

    // If error message is a string, an error has been found
    if(errorMessage != null){
        res.status(406);
        res.send({
            error: errorMessage            
        });
    }
    else {
        // If primeFlag returns true, value is a prime
        let {primeFlag, factorArray} = isPrime(req.query.number);
        if(primeFlag){
            res.status(200);
            res.send({
                input: Number(req.query.number),
                isPrime: primeFlag,
                allFactors: null,
                primeFactors: null
            });
        }
        // If primeFlag is false, it is not a prime and the number's factors must be displayed
        else{
            res.status(200);
            res.send({
                input: Number(req.query.number),
                isPrime: primeFlag,
                allFactors: factorArray,
                primeFactors: Array.from(findPrimeFactors(Number(req.query.number)))
            });
        }
    }
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;