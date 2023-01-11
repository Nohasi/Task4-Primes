export const findPrimeFactors = (value: number) => {
    // Sieve of Eratosthenes-like

    // Using a set because same divisor can be used multiple times, so this avoids duplicates
    let primeFactors = new Set<number>();
    let divisor = 2;
    while(value >= 2){
        if(value % divisor === 0) {
            // If factor is found, value is divided by divisor
            primeFactors.add(divisor);
            value /= divisor;
        }
        // If not, divisor is incremented
        else{
            divisor++;
        }
    }
    console.log(primeFactors);
    return primeFactors;
}