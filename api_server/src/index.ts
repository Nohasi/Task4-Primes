const express = require('express');

import { invalidRequest } from "./modules/invalidRequest";
import { isPrime } from "./modules/isPrime";

const app = express();

app.use(express.json());

app.get('/prime', (req: any, res: any) => {
    console.log(req.query);
    let errorMessage: string | null = invalidRequest(req);
    if(errorMessage != null){
        res.status(406);
        res.send({
            error: errorMessage            
        });
    }
    else {
        res.status(200);
        res.send({
            isPrime: isPrime(req.query.number)
        });
    }
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;