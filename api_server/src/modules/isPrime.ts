export const isPrime = (value: number) => {
    let factorArray : Array<number> = [];
    let primeFlag = true;
    // Loops through all numbers smaller than value
    for(let i = 2; i < value; i++) {
        // If value can be divided by any number with 0 remainder -> Not prime.
        if(value % i === 0){
            factorArray.push(i);
            primeFlag = false;
        }
    }
    return {primeFlag, factorArray};
}