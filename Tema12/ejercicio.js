function fibonacci(num) {
    const arr = [1,1];
    if (num === 1) return [1];
    if (num === 2) return [1, 1];
    for (let i = 1; i < num-1; i++) {
        arr.push(arr[i-1] + arr[i]);
    }
    return arr;
}

console.log(fibonacci(1));