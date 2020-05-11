const factorial = n => {
  let num = n;

  if (n === 0) return 1
  for (let i = 0; i < n; i++) {
    num = n * factorial(n - 1);
  };

  return num;
};

console.time("factorial 1")
factorial(1);
console.timeEnd("factorial 1")

console.time("factorial 5")
factorial(5);
console.timeEnd("factorial 5")

console.time("factorial 10")
factorial(10);
console.timeEnd("factorial 10")

console.time("factorial 12")
factorial(12);
console.timeEnd("factorial 12")