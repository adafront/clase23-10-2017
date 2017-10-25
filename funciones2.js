function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + 
  fibonacci(num - 2);
}

var cantConejos = fibonacci(0);
console.log(cantConejos);

1, 2, 3, 5, 8, 13, 21