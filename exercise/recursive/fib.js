let c = 0;
function fib(n) {
    c++;
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
fib(30);

console.log(c);

// 0, 1, 1, 2, 3, 5, 8, 13, 21

