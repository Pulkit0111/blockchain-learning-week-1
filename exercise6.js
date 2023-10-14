const calculateFactorial = (n) => {
    if(n==0 || n==1) {
        return 1;
    } else {
        return n * calculateFactorial(n-1);
    }
}

console.log(calculateFactorial(5));
console.log(calculateFactorial(0));