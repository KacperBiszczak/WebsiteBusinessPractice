function erastotenesSieve(n)
{
    if(n <= 1) throw new Error("Argument must be bigger than 1.")

    // Create a sieve [2, 3, ... n]
    let sieve = [];
    for(let i = 2; i <= n; i++){
        sieve.push(i);
    }

    // Sift out the multiples
    let currentDivider = 2;
    while(true){
        
        // Put 0 in multiples
        for(let i = 0; i < sieve.length; i++){
            if(sieve[i]%currentDivider == 0 && sieve[i] != currentDivider) sieve[i] = 0;
        }
        
        // Find first non zero number and smaller than sqrt from max number
        currentDivider = sieve.find(number => number > currentDivider && number <= Math.sqrt(n));
        
        // Break if find threw undefined
        if(!currentDivider) break;
    }

    // Filter sieve from zeros
    return sieve.filter(x => x > 1);
}

// console.log(erastotenesSieve(1000));
// console.log(erastotenesSieve(40));
// console.log(erastotenesSieve(20));
// console.log(erastotenesSieve(10));
// console.log(erastotenesSieve(1));
