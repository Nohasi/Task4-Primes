export const BuildFactorDisplays =  ({primeStatus, factors, primeFactors}: 
    {primeStatus: string, factors: number[], primeFactors: number[]}) => {
    let factorsDisplay = '';
    let primeFactorsDisplay = '';
    console.log(`Factors: ${factors}\nprimeFactors: ${primeFactors}`);
    
    // If primeStatus is false, number is not prime -> therefore it has factors
    if(primeStatus === 'false'){
        for(let i = 0; i < factors.length; i++){
            factorsDisplay += `${factors[i]} `;
        }
        for(let i = 0; i < primeFactors.length; i++){
            primeFactorsDisplay += `${primeFactors[i]} `;
        }
    }
    else{ //If it is true, number is prime and has no factors whatsoever
        factorsDisplay = 'none';
        primeFactorsDisplay = 'none';
    }
    
    return [factorsDisplay, primeFactorsDisplay];
}