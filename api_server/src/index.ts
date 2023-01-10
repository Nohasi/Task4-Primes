const express = require('express');

import { invalidRequest } from "./modules/invalidRequest";

const app = express();

app.use(express.json());

app.get('/prime', (req: any, res: any) => {
    console.log(req.query);
    let errorMessage: string | null = invalidRequest(req);
    if(errorMessage === null){
        res.send('Params received!');
    }
    else {
        res.send(`Error: ${errorMessage}`);
    }
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;