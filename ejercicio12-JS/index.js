function Fibonacci(num) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;

    for(let i = 2; i <= num; i++){
        fib[i] = fib[i - 1] + fib[i -2]
        }
        return fib
    }