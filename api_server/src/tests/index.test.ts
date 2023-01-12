const http = require('http');

describe('POST request', () => {
    it('should not connect to the server', () => {
        const options = {
            protocol: 'http:',
            hostname: 'localhost',
            port: 4090,
            path: '/prime',
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            }
        }
        const req = http.request(options, (res: any) => {
            res.on('end', () => {
                expect(res.status).toBe(404);
            })
        });
        req.end();
    })
});

describe('GET request', () => {
    it('Should return isPrime: true if passing a prime number', () => {
        http.get('http://localhost:4090/prime?number=7', (res: any) => {
            let data: string = '';
            res.on('data', (chunk: string) => {
                data += chunk;
            });
            res.on('end', () => {
                expect(JSON.parse(data).isPrime).toBe(true);
                expect(JSON.parse(data).allFactors).toBe(null);
                expect(JSON.parse(data).primeFactors).toBe(null);
            });
        });
    });
    it('Should return isPrime: false and the numbers factors and primeFactors if passing a non-prime', () => {
        http.get('http://localhost:4090/prime?number=16', (res: any) => {
            let data: string = '';
            res.on('data', (chunk: string) => {
                data += chunk;
            });
            res.on('end', () => {
                expect(JSON.parse(data).isPrime).toBe(false);
                expect(JSON.parse(data).allFactors).toStrictEqual([2,4,8]);
                expect(JSON.parse(data).primeFactors).toStrictEqual([2]);
            });
        });
    });
    it('Should properly return a result when using the smallest possible value (2)', () => {
        http.get('http://localhost:4090/prime?number=2', (res: any) => {
            let data: string = '';
            res.on('data', (chunk: string) => {
                data += chunk;
            });
            res.on('end', () => {
                expect(JSON.parse(data).isPrime).toBe(true);
                expect(JSON.parse(data).allFactors).toBe(null);
                expect(JSON.parse(data).primeFactors).toBe(null);
            });
        });
    });
    it('Should properly return a result when using the largest possible value (10,000,000)', () => {
        http.get('http://localhost:4090/prime?number=10000000', (res: any) => {
            let data: string = '';
            res.on('data', (chunk: string) => {
                data += chunk;
            });
            res.on('end', () => {
                let factors: Array<number> = [
                    2,4,5,8,10,16,20,25,32,40,50,64,80,100,125,128,160,
                    200,250,320,400,500,625,640,800,1000,1250,1600,2000,
                    2500,3125,3200,4000,5000,6250,8000,10000,12500,15625,
                    16000,20000,25000,31250,40000,50000,62500,78125,80000,
                    100000,125000,156250,200000,250000,312500,400000,500000,
                    625000,1000000,1250000,2000000,2500000,5000000
                ]
                expect(JSON.parse(data).isPrime).toBe(false);
                expect(JSON.parse(data).allFactors).toStrictEqual(factors);
                expect(JSON.parse(data).primeFactors).toStrictEqual([2,5]);
            });
        });
    });

    describe('invalid request urls', () => {
        it('Should return an error if no number parameter is passed', () => {
            http.get('http://localhost:4090/prime?notnumber=3', (res: any) => {
                let data: string = '';
                res.on('data', (chunk: string) => {
                    data += chunk;
                });
                res.on('end', () => {
                    expect(res.statusCode).toBe(406);
                    expect(JSON.parse(data).error).toBe("The 'number' parameter is not passed");
                });
            });
        });
        it('Should return an error if no number is passed in url', () => {
            http.get('http://localhost:4090/prime?number=', (res: any) => {
                let data: string = '';
                res.on('data', (chunk: string) => {
                    data += chunk;
                });
                res.on('end', () => {
                    expect(res.statusCode).toBe(406);
                    expect(JSON.parse(data).error).toBe("No number is passed into parameter");
                });
            });
        });
        it('Should return an error if a non-numerical value is passed', () => {
            http.get('http://localhost:4090/prime?number=iamhungry', (res: any) => {
                let data: string = '';
                res.on('data', (chunk: string) => {
                    data += chunk;
                });
                res.on('end', () => {
                    expect(res.statusCode).toBe(406);
                    expect(JSON.parse(data).error).toBe("Non-number is passed");
                });
            });
        });
    });

    describe('Invalid numerical values', () => {
        it('Should return an error if 1 is passed', () => {
            http.get('http://localhost:4090/prime?number=1', (res: any) => {
                let data: string = '';
                res.on('data', (chunk: string) => {
                    data += chunk;
                });
                res.on('end', () => {
                    expect(res.statusCode).toBe(406);
                    expect(JSON.parse(data).error).toBe("1 is neither prime nor composite");
                });
            });
        });
        it('Should return an error if 0 is passed', () => {
            http.get('http://localhost:4090/prime?number=0', (res: any) => {
                let data: string = '';
                res.on('data', (chunk: string) => {
                    data += chunk;
                });
                res.on('end', () => {
                    expect(res.statusCode).toBe(406);
                    expect(JSON.parse(data).error).toBe("0 is neither prime nor composite");
                });
            });
        });
        it('Should return an error if a negative is passed', () => {
            http.get('http://localhost:4090/prime?number=-14', (res: any) => {
                let data: string = '';
                res.on('data', (chunk: string) => {
                    data += chunk;
                });
                res.on('end', () => {
                    expect(res.statusCode).toBe(406);
                    expect(JSON.parse(data).error).toBe("-14 is neither prime nor composite");
                });
            });
        });
        it('Should return an error if a value larger than 10,000,000 is passed', () => {
            http.get('http://localhost:4090/prime?number=10000001', (res: any) => {
                let data: string = '';
                res.on('data', (chunk: string) => {
                    data += chunk;
                });
                res.on('end', () => {
                    expect(res.statusCode).toBe(406);
                    expect(JSON.parse(data).error).toBe("Number passed is larger than 10,000,000");
                });
            });
        });
        it('Should return an error if a floating point value is passed', () => {
            http.get('http://localhost:4090/prime?number=5.5', (res: any) => {
                let data: string = '';
                res.on('data', (chunk: string) => {
                    data += chunk;
                });
                res.on('end', () => {
                    expect(res.statusCode).toBe(406);
                    expect(JSON.parse(data).error).toBe("Value passed is not an integer");
                });
            });
        });
    });
});