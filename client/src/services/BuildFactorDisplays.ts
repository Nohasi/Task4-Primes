export const BuildFactorDisplays =  ({primeStatus, factors, primeFactors, factorsDisplay, primeFactorsDisplay}: 
    {primeStatus: string, factors: number[], primeFactors: number[], factorsDisplay: string, primeFactorsDisplay: string}) => {
    if(primeStatus === 'false'){
        for(let i = 0; i < factors.length; i++){
            factorsDisplay += `${factors[i]} `;
        }
        for(let i = 0; i < primeFactors.length; i++){
            primeFactorsDisplay += `${primeFactors[i]} `;
        }
    }
    else{
        factorsDisplay = 'none';
        primeFactorsDisplay = 'none';
    }
    return [factorsDisplay, primeFactorsDisplay];
}